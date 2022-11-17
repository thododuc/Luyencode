//Cap phat bo nho dong malloc
int * arr;

void initArray() {
	int n;
	printf("Enter number of elements\n");
	scanf("%d", &n);
	arr = (int*)malloc(n * sizeof(int));
	if(arr = NULL) {
		printf("Memory not allocated.\n");
		exit(0);
	}
	else {
		printf("Memory successfully allocate.\n");
	}
}
