#include<stdio.h>
#include<math.h>

int a[20];

void init(int a[20]) {
	//int a[20];
	int i;
	for(i = 0; i < 20; i++) {
		*(a+i) = rand()%100;
	}
	for(i = 0; i < 20; i++) {
		printf("%d ", *(a+i));
	}
}

int main() {
	init(a[20]);
	return 0;
}

/*
void display(int a[20]) {
	int i;
	for(i = 0; i < 20; i++) {
		printf("%d ", a[i]);
	}
}

int getMax(int a[20]) {
	int maxValue = a[0];
	int i;
	for(i = 1; i < 20; i++) {
		if(a[i] > maxValue) {
			maxValue = a[i];
		}
	}
	return maxValue;
}

int main() {
	int a[20];
	init(a[20]);
	display(a[20]);
	return 0;
}*/


