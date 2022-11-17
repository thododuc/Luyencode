//In ra gia tri lon nhat cua mang

void findMax(int * a, int n){
	int i, max;
	max = a[0];
	for(i = 1; i < n; i++) {
		if(a[i] > max) {
			max = a[i];
		}
	}
    printf("\nThe maximum value is: %d\n", max);
}
