export interface DrinksItem {
    name:     string;
    price:    string;
    category: Category;
}

export interface Category {
    espresso:    boolean;
    tea:         boolean;
    icedBlended: boolean;
    frappe:      boolean;
}
