const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();
async function main() {
    const item= await prisma.todo.createMany({
        data:[
            {name: "Another thing to do"},
            {name: "More thing to do "},
            {name: "Completed thing to do "},

        ]
    });
    console.log(item);
}

main();