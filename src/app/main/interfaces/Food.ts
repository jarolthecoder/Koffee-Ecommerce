export interface FoodItem {
    name:     string;
    price:    string;
    category: Category;
}

export interface Category {
    bagel:    boolean;
    pastry:   boolean;
    sandwich: boolean;
    other:    boolean;
}
