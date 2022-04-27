import prismaclient from "../../prisma";

interface ProductRequest {
  name: string;
  price: number;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({ name, price, description, banner, category_id }: ProductRequest) {
    const product = await prismaclient.product.create({
      data: {
        name: name,
        price: parseFloat(price.toString()),
        description: description,
        banner: banner,
        category_id: category_id
      }
    })

    return product;
  }
}

export { CreateProductService }