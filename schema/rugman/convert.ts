interface ZohoInventoryItem {
    group_id: number;
    group_name: string;
    unit: string;
    documents: string[];
    item_type: string;
    product_type: string;
    is_taxable: boolean;
    tax_id: number;
    description: string;
    purchase_account_id: number;
    inventory_account_id: number;
    attribute_name1: string;
    name: string;
    rate: number;
    purchase_rate: number;
    reorder_level: number;
    initial_stock: number;
    initial_stock_rate: number;
    vendor_id: number;
    vendor_name: string;
    sku: string;
    upc: number;
    ean: number;
    isbn: number;
    part_number: number;
    attribute_option_name1: string;
    purchase_description: string;
    item_tax_preferences: { tax_id: number; tax_specification: string }[];
    hsn_or_sac: number;
    sat_item_key_code: string;
    unitkey_code: string;
    custom_fields: { field_id: string; field_value: any }[];
}

class RugmanProduct {
    // Rugman product fields
    product_id: number;
    parent_product_id: number | null;
    sku: number;
    sku_alias: string | null;
    // ... other Rugman product fields

    // Custom fields in Rugman product
    sub_color_id?: number;
    background_color?: string;
    background_sub_color?: string;
    medallion_color?: string;
    border_color?: string;
    border_sub_color?: string;
    corner_color?: string;
    sub_design_id?: number;
    pattern?: string;
    price_type?: number;
    shipping_cost?: number;
    map_price?: number;
    shipping_weight?: number;
    shipping_length?: number;
    shipping_width?: number;
    shipping_height?: number;
    sort_order?: number;
    activated?: number;
    keywords?: string;
    note?: string;

    // Convert Rugman product to Zoho Inventory object
    toZohoInventoryObject(): ZohoInventoryItem {
        const zohoItem: ZohoInventoryItem = {
            // Map common fields
            group_id: this.group_id,
            group_name: this.group_name,
            unit: this.unit,
            documents: ["string"], // Example value, replace with actual data
            item_type: this.item_type,
            product_type: this.product_type,
            is_taxable: this.is_taxable,
            tax_id: this.tax_id,
            description: this.description,
            purchase_account_id: this.purchase_account_id,
            inventory_account_id: this.inventory_account_id,
            attribute_name1: this.attribute_name1,
            name: this.name,
            rate: this.rate,
            purchase_rate: this.purchase_rate,
            reorder_level: this.reorder_level,
            initial_stock: this.initial_stock,
            initial_stock_rate: this.initial_stock_rate,
            vendor_id: this.vendor_id,
            vendor_name: this.vendor_name,
            sku: this.sku.toString(),
            upc: this.upc,
            ean: this.ean,
            isbn: this.isbn,
            part_number: this.part_number,
            attribute_option_name1: this.attribute_option_name1,
            purchase_description: this.purchase_description,
            item_tax_preferences: [
                // Example value, replace with actual data
                { tax_id: this.tax_id, tax_specification: "intra" },
            ],
            hsn_or_sac: this.hsn_or_sac,
            sat_item_key_code: this.sat_item_key_code || "string", // Example value, replace with actual data
            unitkey_code: this.unitkey_code || "string", // Example value, replace with actual data

            // Initialize custom_fields array to store non-common Rugman product fields
            custom_fields: [],
        };

        // Map custom fields
        if (this.sub_color_id) {
            zohoItem.custom_fields.push({
                field_id: "sub_color_id",
                field_value: this.sub_color_id,
            });
        }

        // Add more custom fields as needed for other non-common Rugman fields

        return zohoItem;
    }
}

// Usage example:
const rugmanProduct = new RugmanProduct();
// Populate Rugman product fields
const zohoItem = rugmanProduct.toZohoInventoryObject();
console.log(zohoItem);
