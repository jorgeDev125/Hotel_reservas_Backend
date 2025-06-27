export class CustomerController {
  static createCustomer = async (req, res) => {
    // const { document } = req.body;

    // try {
    //   const userExists = await prisma.user.findFirst({
    //     where: {
    //       document,
    //     },
    //   });
    //   if (userExists) {
    //     const error = new Error("El Cliente ya esta registrado");
    //     res.status(409).json({ error: error.message });
    //     return;
    //   }

    //   await prisma.user.create({
    //     data: req.body,
    //   });
    //   res.send("Cliente creado correctamente");
    // } catch (error) {
    //   res.status(500).json({ error: "Hubo un error" });
    // }
  };

  static getCustomers = async (req, res) => {
    res.send("Lista de clientes");
    // try {
    //   const users = await prisma.user.findMany();
    //   res.json(users);
    // } catch (error) {
    //   res.status(500).json({ error: "Hubo un error" });
    // }
  };
  
  static getUCustomerById = async (req, res) => {
    // const { id } = req.params;
    // try {
    //   const user = await prisma.user.findUnique({
    //     where: {
    //       id: parseInt(id),
    //     },
    //   });
    //   if (!user) {
    //     const error = new Error("Cliente no encontrado");
    //     res.status(404).json({ error: error.message });
    //     return;
    //   }
    //   res.json(user);
    // } catch (error) {
    //   res.status(500).json({ error: "Hubo un error" });
    // }
  };
}

