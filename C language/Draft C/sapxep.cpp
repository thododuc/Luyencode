#include<stdio.h>
#include<iostream>
using namespace std;
/* h�m xu?t c�c ph?n t? trong m?ng */
void printArr(int arr[], int n){
  for(int i = 0; i < n; i++) //ch?y v�ng l?p t?ng ph?n t? trong m?ng
    cout<<arr[i]<<"\t"; // xu?t c�c ph?n t? trong m?ng
  cout<<endl;
}
/* h�m s?p x?p c�c ph?n t? trong m?ng */
void sort(int arr[], int n, int i){
  int j, swap;
  //th?c hi?n v�ng l?p d? s?p x?p c�c ph?n t?
  for(j = i + 1; j < n; j++){
    if(arr[i] > arr[j]){ // N?u ph?n t? tru?c l?n hon ph?n t? sau th� th?c hi?n tr�o d?i v? tr� gi?a hai ph?n t?
      swap = arr[i];
      arr[i] = arr[j];
      arr[j] = swap;
    }
    sort(arr, n, i + 1);//Ti?p t?c g?i d? quy v� th?c hi?n d?n khi h�m k?t th�c
  }
}
  
int main()
{
   int n;
    int a[n];
    do{
        cout << "\nNh?p v�o s? lu?ng ph?n t? c� trong m?ng: ";
        cin >> n;
    }while(n <= 0);  
      
    for(int i = 0;i < n;i++){
        cout<<"a["<<i<<"]=";
       cin >> a[i];
    };
     sort(a, n, 0);
    cout<<"M?ng sau khi du?c s?p x?p: \n";
    printArr(a, n);
  
}
