#include <iostream>
#include <vector>
#include <bits/stdc++.h>
using namespace std;

// Placeholder function for user logic
int longestBalancedFrequencySubarray(const vector<int>& arr) {
    /**
     * Write your logic here.
     * Parameters:
     *     arr (vector<int>): List of integers
     * Returns:
     *     int: Length of the longest balanced frequency subarray
     */
    int maxlen = 0;
    int n = arr.size();
    for(int i=0;i<n;i++){
        unordered_map<int,int>freq;
        for(int j=i;j<n;j++){
            freq[arr[j]]++;
            unordered_set<int>st;
            for(auto &it : freq){
                st.insert(it.second);
            }
            if(st.size()==1){
                maxlen = max(maxlen, j-i+1);
            }
        }
    }
    return maxlen; // Placeholder return value
}

int main() {
    int n;
    cin >> n; // Read the size of the array

    vector<int> arr(n);
    for (int i = 0; i < n; ++i) {
        cin >> arr[i]; // Read the array elements
    }

    // Call user logic function and print the output
    int result = longestBalancedFrequencySubarray(arr);
    cout << result << endl;

    return 0;
}
