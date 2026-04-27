#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Function to be implemented by the user
int maxDistance(const vector<int>& arr) {
    /*
    Write your logic here.
    Parameters:
        arr (vector<int>): List of integers
    Returns:
        int: The maximum distance between two identical elements after one possible subarray reversal.
             If no two identical elements exist after the reversal, return -1.
    */
    int n = arr.size();
    vector<int>firstPos(100001,-1);
    vector<int>lastPos(100001,-1);
    bool duplicate = false;

    for(int i=0;i<n;i++){
        int val = arr[i];
        if(firstPos[val]==-1){
            firstPos[val]=i;
        }else{
            duplicate=true;
        }
        lastPos[val]=i;
    }
    if(!duplicate){
        return 0;
    }
    int maxDistance = 0;
    for(int i=1;i<=100000;i++){
        if(firstPos[i]!=-1){
            int first = firstPos[i];
            int last = lastPos[i];
            int d1= last - first;
            int d2 = last;
            int d3 = (n - 1) - first;
            maxDistance = max({maxDistance,d1,d2,d3});
        }
    }
    return maxDistance; // Placeholder return value
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n; // Read the size of the array

    vector<int> arr(n);
    for (int i = 0; i < n; ++i) {
        cin >> arr[i]; // Read the array elements
    }

    // Call the function to find the maximum distance between identical elements
    int result = maxDistance(arr);

    // Output the result
    cout << result << endl;

    return 0;
}
