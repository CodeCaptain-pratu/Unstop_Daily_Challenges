#include <iostream>
#include <vector>
#include<algorithm>
using namespace std;

// Function prototype
int minimum_excess(int N, int K, vector<int>& students, vector<int>& packets);

int main() {
    int N, K;
    cin >> N >> K;
    vector<int> students(N);
    vector<int> packets(K);
    for (int i = 0; i < N; i++) {
        cin >> students[i];
    }
    for (int i = 0; i < K; i++) {
        cin >> packets[i];
    }
    int result = minimum_excess(N, K, students, packets);
    cout << result << endl;
    return 0;
}

int minimum_excess(int N, int K, vector<int>& students, vector<int>& packets) {
    // Implement your logic here
     sort(students.begin(),students.end());
    sort(packets.begin(),packets.end());
    int student_ptr=0;
    int packet_ptr=0;
    long long total_access=0;
    while(student_ptr<N && packet_ptr<K){
        if(packets[packet_ptr]>=students[student_ptr]){
            total_access+=(packets[packet_ptr]-students[student_ptr]);
            student_ptr++;
        }
        packet_ptr++;
    }
    if(student_ptr==N){
        return (int)total_access;
    }
    return -1;
}
