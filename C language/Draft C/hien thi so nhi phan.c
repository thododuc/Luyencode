#include<stdio.h>
//#include<iostream>
void dayNhiPhan(int i, int n, int *X) {	
    int val;
    for (val = 0; val < 2; val++) {
        X[i] = val;
        if (i == (n-1)) {
            int j;
            for(j = 0; j < n; j ++) {
                printf("%d", X[j]); 
            }
            printf("\n");
        }
        else {
            dayNhiPhan(i+1, n, X); //
        }
    }
}
 
int main() {
    int n;
    printf("Nhap n : ");    
    scanf("%d", &n);
    int X[n];    
    printf("Day nhi phan co do dai %d la:\n", n);
    dayNhiPhan(0, n, X);
	return 0;
}
