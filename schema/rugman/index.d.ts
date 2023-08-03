export declare namespace Rugman {
    interface Product {
        product_id: number; // Product ID (Primary key)
        parent_product_id: number | null; // Parent Product ID
        sku: number; // Product Stock Keeping Unit (Unique identifier)
        sku_alias: string | null; // Product Stock Keeping Unit For Supplier
        upc: string | null; // Universal Product Code
        length: number; // Length In Centimeter
        width: number; // Width In Centimeter
        height: number | null; // Pile Height In Millimeter
        weight: number | null; // Product Weight In Pound
        quantity: number; // Quantity
        image: string; // Image Main Name
        age_id: number; // Age Of Product (New, Antique, Semi-Antique) (Foreign key to attribute_age table)
        color_id: number; // Color (Red, Green, Blue) (Foreign key to attribute_color table)
        sub_color_id: number | null; // Color (RustRed, Light Green, Navy Blue) (Foreign key to attribute_color table)
        background_color: string | null;
        background_sub_color: string | null;
        medallion_color: string | null;
        border_color: string | null;
        border_sub_color: string | null;
        corner_color: string | null;
        design_id: number | null; // Design Of Product (Tabriz, Qom, Kashan, ....) (Foreign key to attribute_design table)
        sub_design_id: number | null;
        foundation_id: number | null; // Foundation (Wool, Silk, Kork, Polypropylene, Synthetic) (Foreign key to attribute_foundation table)
        kpsi_id: number | null; // Knots Per Square Inch (Foreign key to attribute_kpsi table)
        material_id: number | null; // Material (Wool, Silk, Kork, Polypropylene, Synthetic) (Foreign key to attribute_material table)
        origin_id: number; // Origin (Persian, Indian, Turkish) (Foreign key to attribute_origin table)
        pattern: string | null; // Comma Separated Pattern ID Of Product (All Over, Fish-Mahi, Floral, Geometric, Medallion)
        quality_id: number; // Quality Of Product (Fine, Good, ...) (Foreign key to attribute_quality table)
        shape_id: number; // Shape Of Product (Rectangle, Runner, Oval, Square, Round, Octagon, Wide Runner, Over Size) (Foreign key to attribute_shape table)
        size_id: number; // Size Category (Foreign key to attribute_size table)
        style_id: number | null; // Style Of Product (Traditional, Persian, Modern, Tribal) (Foreign key to attribute_style table)
        weave_id: number; // Weave Type (Hand Knotted, Hand Tufted, Flat Woven) (Foreign key to attribute_weave table)
        collection_id: number | null; // Brand Of Product (Norisan, Momeni, ...) (Foreign key to collection table)
        family_id: number | null; // Family Of Product (Foreign key to family table)
        price_type: 0 | 1 | 2; // 0 Per Piece, 1 Per Square Foot, 2 Per Square Meter
        price: number; // Wholesale Market Value
        purchase_price: number | null; // Purchase Price
        shipping_cost: number | null; // Estimated Shipping Cost (based on Size and type of Rugs)
        map_price: number | null; // Minimum Advertised Price
        total_cost: number; // Total costs in the table of costs of a product
        viewed: number | null; // Count OF View by Visitor
        supplier_id: number | null; // Supplier Name (Foreign key to supplier table)
        company_id: number; // Owner Of Product (Foreign key to company table)
        warehouse_id: number; // Warehouse OF Product (Foreign key to warehouse table)
        shipping_date: string | null; // NULL = active now
        shipping_weight: number | null; // Shipping Weight In Pound
        shipping_length: number | null; // Shipping Length In Inches
        shipping_width: number | null; // Shipping Width In Inches
        shipping_height: number | null; // Shipping Height In Inches
        sort_order: number | null;
        status_id: number; // Product Status (Foreign key to status table)
        activated: boolean; // Activation (false: hidden, true: show)
        description: string | null; // Product Description Show In Product Detail
        keywords: string | null;
        note: string | null; // Extra Note For owner or admin
        created_at: string | null; // Creation timestamp
        created_user_id: number | null;
        updated_at: string | null; // Last update timestamp
        updated_user_id: number | null;
    }
}