import React from 'react';
import {anOldHope, CopyBlock} from "react-code-blocks";
import {useSelector} from "react-redux";

const GuideDomainUrl = () => {
    const clusterName = useSelector(state => state.token.clusterName);

    const code = `# .KUBECONFIG에 여러 콘텍스트가 있을 수 있으므로, 가능한 모든 클러스터를 확인한다.
kubectl config view -o jsonpath='{"Cluster name\\tServer\\n"}{range .clusters[*]}{.name}{"\\t"}{.cluster.server}{"\\n"}{end}'

# 위의 출력에서 상호 작용하려는 클러스터의 이름을 선택한다. ex) export CLUSTER_NAME="docker_desktop"
export CLUSTER_NAME="${clusterName}"

# 클러스터 이름을 참조하는 API 서버를 가리킨다.
APISERVER=$(kubectl config view -o jsonpath="{.clusters[?(@.name==\\"$CLUSTER_NAME\\")].cluster.server}")

# 서비스 어카운트 'zolang'을 생성한다.
kubectl create serviceaccount zolang -n default

# 기본 서비스 어카운트용 토큰을 보관할 시크릿을 생성한다.
kubectl apply -f - <<EOF
apiVersion: v1
kind: Secret
metadata:
  name: zolang-token
  annotations:
    kubernetes.io/service-account.name: zolang
type: kubernetes.io/service-account-token
EOF

# 생성한 시크릿에 대하여 클러스터 권한을 생성한다.
kubectl apply -f - <<EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: node-viewer
rules:
- apiGroups: [""]
  resources: ["nodes", "deployments", "replicasets", "pods", "services", "ingresses"]
  verbs: ["get", "list", "watch"]
EOF

# 생성한 권한을 바인딩한다.
kubectl apply -f - <<EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: node-viewer-binding
subjects:
- kind: ServiceAccount
  name: zolang
  namespace: default
roleRef:
  kind: ClusterRole
  name: node-viewer
  apiGroup: rbac.authorization.k8s.io
EOF

# 토큰 컨트롤러가 해당 시크릿에 토큰을 기록할 때까지 기다린다.
while ! kubectl describe secret zolang-token -n default | grep -E '^token' >/dev/null; do
  echo "waiting for token..." >&2
  sleep 1
done

# 토큰 값을 얻는다
TOKEN=$(kubectl get secret zolang-token -n default -o jsonpath='{.data.token}' | base64 --decode)

# TOKEN 값을 출력한다.
echo $TOKEN

# APISERVER를 출력한다.
echo $APISERVER`;

    return (
        <div
            style={{
                backgroundColor: "#2E3240",
                padding: "10px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                margin: "15px",
                marginBottom: "50px"
            }}
        >
            <span
                style={{
                    fontSize: "24px",
                    color: "#ffffff",
                    padding: "5px",
                    margin: "5px",
                }}
            >
                Token & Domain URL 확인 방법
            </span>
            <hr
                style={{
                    width: "98%",
                    border: 0,
                    height: "1px",
                    backgroundColor: "#474B59",
                }}
            />
            <span
                style={{
                    display: 'block',
                    fontSize: "16px",
                    color: "#ffffff",
                    padding: "5px",
                    margin: "5px",
                    lineHeight: '2'
                }}
            >
                위에 클러스터 이름을 작성하여 아래의 코드를 터미널에 입력합니다.<br />
                출력된 토큰과 APISERVER 도메인으로 클러스터를 추가해주세요.
            </span>
            <div style={{ width: "60vw", padding: "5px", margin: "5px" }}>
                <CopyBlock
                    language="yaml"
                    text={code}
                    theme={anOldHope}
                    wrapLines={true}
                    showLineNumbers={false}
                    codeBlock
                />
            </div>
        </div>
    );
};

export default GuideDomainUrl;