#include<stdio.h>
#include<iostream>
using namespace std;
void dayNhiPhan(int i, int n, int *X)
{	
	printf("001\n");
    int val;    // val là các giá tr? có th? gán cho các v? trí trong x
    for (val = 0; val < 2; val++)      // val có th? nh?n hai giá tr? là 0 và 1
    {
    	printf("002\n");
        X[i] = val;
        printf("i = %d, val = %d, X[0] = %d, X[1] = %d\n", i, val, X[0], X[1]);
  
        if (i == (n-1))         // n?u i là ph?n t? cu?i c?a dãy
        {
        	printf("003\n");
            int j;
            for(j = 0; j < n; j ++)         // thì tin ra nh? phân m?i tìm du?c
            {
                cout<<X[j];
                
            }
            cout<<"\n";
        }
  
        else              // n?u i chua ph?i là ph?n t? cu?i thì gán cho i sau là i+1.
        {
        	printf("004\n");
            dayNhiPhan(i+1, n, X); // g?i d? quy ti?p t?c th?c hi?n hàm

        }
        printf("Ta co i = %d\n", i);
    }
}
 
int main()
{
    int n;
    cout<<"Nhap n : ";    
    cin>>n;
  
    int X[n];    
    cout<<"Dãy nhi phân có do dài "<<n<<" là:\n";
    dayNhiPhan(0, n, X);  
  
    cout<<"\n--------------------------------\n";
    cout<<"Chuong trình này du?c dang t?i Freetuts.net";
}