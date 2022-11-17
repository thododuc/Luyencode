


void menu(){
    int ch;
    while(1){
        printf("\n\t\tFunctions\n");
        printf("\n1. Init Arry");
        printf("\n2. findMax");
        printf("\n3. findMin");
        printf("\n4. sortAsc");
        printf("\n5. sortDesc");
        printf("\n6. findByValue");
        printf("\n7. Exit");
        printf("\nEnter your choice: ");
        scanf("\n %d",&ch);
       
        switch(ch){
            case 1: initArray();
                break;
            case 2: findMax(a, n);
                break;
            case 3: findMin(a, n);
                break;
            case 4: sortAsc(a, n);//ch? có dc c?a m?ng du?c truy?n vào
                break;
            case 5: sortDesc(a, n);
                break;
            case 6: findByValue(a, n);
                break;
            case 7:
                exit(0);
        }
    }
   
}
