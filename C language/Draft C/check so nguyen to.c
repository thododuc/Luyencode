


void checkNumber(int a) {
	int i;
	int b = 0;
	for(i = 2; i < sqrt(a); i++) {
		if(a % i == 0) {
			b = b + 1;
		}
	}
	if(b == 0) {
		printf("%d is a prime number", a);
	}
	else {
		printf("%d is not a prime number", a);
	}
}
