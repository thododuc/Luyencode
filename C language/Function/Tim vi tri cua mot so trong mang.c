// Tim vi tri cua mot so trong mang


void findByValue(int a[], int n){
    int i, j, fValue;
    int b[n];
    int numOfResult = 0;
    j = 0;
    printf("Enter the value to be searched\n");
    scanf("%d", &fValue);
    for(i = 0; i < n; i++) {
    	if(a[i] == fValue) {
    		numOfResult++;
    		b[j] = i;
    		j++;
		}
	}
	if(numOfResult == 0) {
		printf("\nValue %d not found.", fValue);
	}
	else {
		printf("The value %d is found at the location: ", fValue);
		for(j = 0; j < numOfResult; j++) {
			printf("%d ", b[j] + 1);
		}
	}
}
