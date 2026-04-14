#include <iostream>
#include <vector>
#include<algorithm>
using namespace std;

// User logic function
vector<int> processApplications(int N, int T, vector<vector<int>>& applications) {
    // User should implement the logic here.
    // This function should return a vector of integers where each integer
    // corresponds to the minimum number of checkpoints required for each application,
    // or -1 if it's not possible to meet or exceed T.
    vector<int>res(N,-1);
    for(int i=0;i<N;i++){
        vector<int>arr=applications[i];
        sort(arr.begin(),arr.end(),greater<int>());
        int sum=0, count=0;
        for(int j=0;j<arr.size();j++){
            sum+=arr[j];
            count++;
            if(sum>=T){
                break;
            }
        }
        if(sum>=T){
            res[i]=count;
        }
    }
    return res; // Placeholder return
}

int main() {
    int N, T;
    cin >> N >> T;  // Read number of applications and required minimum total priority score

    vector<vector<int>> applications(N);  // To store all applications data

    for (int i = 0; i < N; ++i) {
        int C;
        cin >> C;  // Read number of checkpoints for the current application
        applications[i].resize(C);

        for (int j = 0; j < C; ++j) {
            cin >> applications[i][j];  // Read priority scores for each checkpoint
        }
    }

    // Call the user logic function
    vector<int> results = processApplications(N, T, applications);

    // Output the results
    for (int result : results) {
        cout << result << endl;
    }

    return 0;
}
