const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();
async function main() {
    const item= await prisma.todo.create({
        data:{
            name: "Something to do ",
        }
    });
    console.log(item);
}

main();