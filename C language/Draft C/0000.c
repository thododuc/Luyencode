#include<stdio.h>

/*int factorial(int n, int a) {
	if(n == 1) {
		return a;
	}
	else {
		return factorial(n - 1, n * a);
	}
}*/


int factorial(n) {
	if(n == 1) {
		return 1;
	}
	else {
		return factorial(n - 1) * n;
	}
}
int main() {
	int n;
	printf("Nhap vao so can tinh giai thua\n");
	scanf("%d", &n);
	printf("%d", factorial(n, 1));
	return 0;
}
