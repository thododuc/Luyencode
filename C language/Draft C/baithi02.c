#include<stdio.h>


int isEvenNumber(int n) {
	if(n % 2 == 0) {
		return 1;
	}
	else {
		return 0;
	}
}

void disEvenNumber (int n, int m) {
	int i, j, temp;
	int numResult = 0;
	if(m < n) {
		temp = m;
		m = n;
		n = temp;
	}
	printf("The even numbers between %d and %d: \n" , n, m);
	for(i = n + 1; i < m; i++) {
		if(isEvenNumber(i) == 1) {
			printf("%d\n", i);
		}
	}
}

int main() {
	int n, m;
	printf("Please, enter a number:\n");
	printf("+ n: ");
	scanf("%d", &n);
	printf("+ m: ");
	scanf("%d", &m);	
	disEvenNumber(n , m);
	return 0;
}
