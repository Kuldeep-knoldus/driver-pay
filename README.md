# Architectural Diagram for Angular Application Deployment

```plaintext
+-------------------+
|     Users         |
| (Web Browsers)    |
+---------+---------+
          |
          | 1. DNS Query
          |
+---------v---------+
|    Cloud DNS      |
| (Domain: myapp.com)|
+---------+---------+
          |
          | 2. DNS Resolution
          |
+---------v---------+
|   Load Balancer   |
| (HTTP(S) Load Balancer)|
+---------+---------+
          |
          | 3. Route Traffic
          |
+---------v---------+
|  Angular App      |
| (GKE / VMs)       |
+---------+---------+
          |
          | 4. Static Assets
          |
+---------v---------+
|       CDN         |
| (Caching Static   |
|  Assets)          |
+-------------------+
