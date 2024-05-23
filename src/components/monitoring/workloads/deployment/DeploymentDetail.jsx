import React from 'react';
import KeyboardArrowLeft from "../../../icon/KeyboardArrowLeft.jsx";
import MuiButton from "@mui/material/Button";

const data = {
    "success": true,
    "data": [
        {
            "metadata": {
                "name": "dashboard-metrics-scraper",
                "namespace": "kube-system",
                "creationDate": "2023 .05 .06 .",
                "creationTime": "오전 06:04:58",
                "age": "1 year",
                "uid": "3356a050-903f-450d-b976-b650baf53a40",
                "labels": {
                    "k8s-app": "dashboard-metrics-scraper"
                },
                "annotations": {
                    "deployment.kubernetes.io/revision": "1",
                    "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"apps/v1\",\"kind\":\"Deployment\",\"metadata\":{\"annotations\":{},\"labels\":{\"k8s-app\":\"dashboard-metrics-scraper\"},\"name\":\"dashboard-metrics-scraper\",\"namespace\":\"kube-system\"},\"spec\":{\"replicas\":1,\"revisionHistoryLimit\":10,\"selector\":{\"matchLabels\":{\"k8s-app\":\"dashboard-metrics-scraper\"}},\"template\":{\"metadata\":{\"labels\":{\"k8s-app\":\"dashboard-metrics-scraper\"}},\"spec\":{\"containers\":[{\"image\":\"kubernetesui/metrics-scraper:v1.0.8\",\"livenessProbe\":{\"httpGet\":{\"path\":\"/\",\"port\":8000,\"scheme\":\"HTTP\"},\"initialDelaySeconds\":30,\"timeoutSeconds\":30},\"name\":\"dashboard-metrics-scraper\",\"ports\":[{\"containerPort\":8000,\"protocol\":\"TCP\"}],\"securityContext\":{\"allowPrivilegeEscalation\":false,\"readOnlyRootFilesystem\":true,\"runAsGroup\":2001,\"runAsUser\":1001},\"volumeMounts\":[{\"mountPath\":\"/tmp\",\"name\":\"tmp-volume\"}]}],\"nodeSelector\":{\"kubernetes.io/os\":\"linux\"},\"securityContext\":{\"seccompProfile\":{\"type\":\"RuntimeDefault\"}},\"serviceAccountName\":\"kubernetes-dashboard\",\"tolerations\":[{\"effect\":\"NoSchedule\",\"key\":\"node-role.kubernetes.io/master\"}],\"volumes\":[{\"emptyDir\":{},\"name\":\"tmp-volume\"}]}}}}\n"
                }
            },
            "resource": {
                "strategy": "RollingUpdate",
                "minimumPreparationTime": 0,
                "revisionHistoryLimit": 10,
                "selector": {
                    "k8s-app": "dashboard-metrics-scraper"
                }
            },
            "rollingUpdateStrategy": {
                "maxSurge": "25%",
                "maxUnavailable": "25%"
            },
            "podConditions": {
                "updatedReplicas": 1,
                "totalReplicas": 1,
                "availableReplicas": 1
            },
            "condition": [
                {
                    "type": "Progressing",
                    "status": "True",
                    "lastUpdateTime": "2023. 05. 06. 오전 06:05:00",
                    "lastUpdateAge": "1 year",
                    "lastTransitionTime": "2023. 05. 06. 오전 06:04:58",
                    "lastTransitionAge": "1 year",
                    "reason": "NewReplicaSetAvailable",
                    "message": "ReplicaSet \"dashboard-metrics-scraper-7bc864c59\" has successfully progressed."
                },
                {
                    "type": "Available",
                    "status": "True",
                    "lastUpdateTime": "2024. 05. 20. 오후 13:35:05",
                    "lastUpdateAge": "9 hour",
                    "lastTransitionTime": "2024. 05. 20. 오후 13:35:05",
                    "lastTransitionAge": "9 hour",
                    "reason": "MinimumReplicasAvailable",
                    "message": "Deployment has minimum availability."
                }
            ]
        }
    ],
    "error": null
}.data[0];

const DeploymentDetail = ({ deployment, setDeployment}) => {
    return (
        <div
            style={{ width: '79vw' }}
        >
            {/* list로 가기 버튼 */}
            <MuiButton
                style={{
                    width: 'fit-content',
                    background: 'transparent',
                    color: 'white',
                    border: 'none',
                    marginBottom: '10px',
                    padding: '10px 0',
                    fontSize: '1.1rem'
                }}
                onClick={() => {setDeployment(null)}}
            >
                <KeyboardArrowLeft />
                Return to List
            </MuiButton>
        </div>
    );
};

export default DeploymentDetail;