// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('/api/v1/cluster', () => {
        return HttpResponse.json({
            "success": true,
            "data": [
                {
                    "clusterId" : 1,
                    "clusterName": "default",
                    "domainUrl": "https://127.0.0.1:6443",
                    "version": "1.29.1"
                },
                {
                    "clusterId" : 2,
                    "clusterName": "test1",
                    "domainUrl": "https://127.0.0.:6443",
                    "version": "1.29.0"
                },
                {
                    "clusterId" : 3,
                    "clusterName": "test2",
                    "domainUrl": "https://127.0.0.1:6443",
                    "version": "1.29.3"
                }
            ],
            "error": null
        })
    }),

    http.get('/api/v1/cluster/:clusterId/status', ({params}) => {
        const { clusterId } = params;
        return HttpResponse.json({
            "success": true,
            "data": clusterId % 2 === 0,
            "error": null
        })
    })
]