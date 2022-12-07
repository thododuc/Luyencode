//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution{
    public:
    // arr: input array
    // n: size of array
    //Function to find the sum of contiguous subarray with maximum sum.
    long long maxSubarraySum(int arr[], int n){
        
        // Your code here
        int b[n];
    
        int i, j;
        int m = 1, positive = 1, negative = 1;
        for (i = 0; i < n; i++) {
            if(arr[i] > 0) {
                negative *= 0;
            } else {
                positive *= 0;
            }
        }
        if (negative == 1) {
            int max = arr[0];
            for(i=0; i < n-1; i++) {
                if (arr[i+1] > max) {
                    max = arr[i+1];
                }
            }
            return max;
        }
        
        if (positive == 1) {
            int sum = 0;
            for(i = 0; i < n; i++) {
                sum += arr[i];
            }
            return sum;
        }
        
        for (i=0; i < n; i++) {
            b[i] = 0;
        }
        printf("b47");
        for (i = 0; i < n;) {
            if (m * arr[i] > 0) {
                b[j] += arr[i];
                i++;
                continue;
            }
            j++;
            m *= -1;  
        }
        printf("b57");
        int sumb;
        sumb = 0;
        for (j = 0; j < n; j++) {
            sumb += b[j];
            if (sumb <=0) {
                sumb = 0;
            }
        }
        return sumb;
    }
};

//{ Driver Code Starts.

int main()
{
    int t,n;
    
    cin>>t; //input testcases
    while(t--) //while testcases exist
    {
        
        cin>>n; //input size of array
        
        int a[n];
        
        for(int i=0;i<n;i++)
            cin>>a[i]; //inputting elements of array
            
        Solution ob;
        
        cout << ob.maxSubarraySum(a, n) << endl;
    }
}

// } Driver Code Ends
