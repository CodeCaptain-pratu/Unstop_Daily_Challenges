#include <iostream>
#include <vector>
#include <string>
#include <queue>
using namespace std;

// Function where the user will write their logic
void turnOfConnectedGroup(int start_r, int start_c,int n, int m, 
vector<string>&grid){
    queue<pair<int,int>>q;
    q.push({start_r,start_c});
    grid[start_r][start_c]='0';
    int dr[]={-1,1,0,0};
    int dc[]={0,0,-1,1};

    while(!q.empty()){
        pair<int,int>curr = q.front();
        q.pop();
        for(int i=0;i<4;i++){
            int nr=curr.first+dr[i];
            int nc=curr.second+dc[i];
            if(nr>=0 && nr<n && nc>=0 && nc<m && grid[nr][nc]=='1'){
                grid[nr][nc]='0';
                q.push({nr,nc});
            }
        }
    }
}
int min_operations_to_turn_off(int n, int m, vector<string>& grid) {
    // User logic goes here
    int operation = 0;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(grid[i][j]=='1'){
                operation++;
                turnOfConnectedGroup(i,j,n,m,grid);
            }
        }
    }
    return operation; // Placeholder return value
}

int main() {
    int n, m;
    cin >> n >> m; // Read the number of rows and columns

    vector<string> grid(n);
    for (int i = 0; i < n; ++i) {
        cin >> grid[i]; // Read each row as a string
    }

    // Call the user logic function and print the output
    int result = min_operations_to_turn_off(n, m, grid);
    cout << result << endl;

    return 0;
}
