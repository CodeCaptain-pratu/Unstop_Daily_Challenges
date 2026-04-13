#include <iostream>
#include <vector>
#include<array>
#include<queue>
#include<climits>
using namespace std;

int user_logic(int N, int M, int K, vector<int>& switch_cost, vector<vector<int>>& connections) {
    // Implement your logic here
    vector<vector<array<int,3>>>adj(N);
    for(auto &e:connections){
        int u=e[0], v=e[1];
        int normal=e[2],  quantum=e[3];
        adj[u].push_back({v,normal,quantum});
        adj[v].push_back({u,normal,quantum});
    }
    vector<vector<vector<int>>>dist(N,vector<vector<int>>(2,vector<int>(K+1,INT_MAX)));
    priority_queue<
        vector<int>,
        vector<vector<int>>,
        greater<vector<int>>
    >pq;
    pq.push({0,0,0,0});
    dist[0][0][0]=0;
    while(!pq.empty()){
        auto top=pq.top();
        pq.pop();
        int cost=top[0];
        int node=top[1];
        int mode=top[2];
        int count=top[3];
        if(node==N-1){
            return cost;
        }
        if(cost>dist[node][mode][count]){
            continue;
        }
        int newmode=1-mode;
        int switchcost=cost+switch_cost[node];
        if(switchcost<dist[node][newmode][0]){
            dist[node][newmode][0]=switchcost;
            pq.push({switchcost,node,newmode,0});
        }

        for(auto &it : adj[node]){
            int next=it[0];
            int normal=it[1];
            int quantum=it[2];
            //mode 0(normal mode)
            if(mode==0){
                int newcost=cost+normal;
                if(newcost<dist[next][0][0]){
                    dist[next][0][0]=newcost;
                    pq.push({newcost,next,0,0});
                }
            }else{//quantum mode
                if(count<K){
                    int newcost=cost+quantum;
                    if(newcost<dist[next][1][count+1]){
                      dist[next][1][count+1]=newcost;
                      pq.push({newcost,next,1,count+1});
                    }
                }
            }
        }
    }
    return -1;
}

int main() {
    int N, M, K;
    cin >> N >> M >> K;
    
    vector<int> switch_cost(N);
    for (int i = 0; i < N; i++) {
        cin >> switch_cost[i];
    }

    vector<vector<int>> connections(M, vector<int>(4));
    for (int i = 0; i < M; i++) {
        cin >> connections[i][0] >> connections[i][1] >> connections[i][2] >> connections[i][3];
    }

    int result = user_logic(N, M, K, switch_cost, connections);
    cout << result << endl;
    return 0;
}
