export class FieldInterface {
    name: string;
    required: boolean;
    field_type: string;
}
export class CategoryInterface {
    categoryName: string;
    description: string;
    created_at: string;
    stagesAllowed:string[];
    fields:[FieldInterface]
}
