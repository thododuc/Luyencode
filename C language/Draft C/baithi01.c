#include<stdio.h>


int isEvenNumber(int n) {
	if(n % 2 == 0) {
		return 1;
	}
	else {
		return 0;
	}
}
int main() {
	int n;
	printf("Enter number to check even number: ");
	scanf("%d", &n);
	if(isEvenNumber(n) == 1) {
		printf("\n%d is an even number.\n", n);
	}
	else {
		printf("\n%d is not an even number.\n", n);
	}
	return 0;
}



