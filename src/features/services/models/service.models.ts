export interface Service{
    id: string;
    name: string;
    price: number;
    description: string;
}

export interface ServiceUpsertModel extends Omit<Service, "id">{
    
}