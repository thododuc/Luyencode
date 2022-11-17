#include <stdio.h>

int main () {
	int a[12] = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24};
	int n;
	printf("Nhap so can tim\n");
	scanf("%d", &n);
	int low = 0, high = 12, mid, timra = 0;
	while(low < high) {
		mid = (low + high) / 2;
		if(a[mid] == n) {
			printf("\n%d nam o vi tri thu %d", n, mid + 1); //mid+1 vi vi tri dau tien mac dinh la 0
			timra = 1;
			break;
		}
		else if (a[mid] < n) {
			low = mid + 1;
		}
		else {
			high = mid - 1;
		}
	}
	if(timra == 0) {
		printf("Khong tim duoc gia tri %d" , n);
	}
	return(0);
}
