const BookModel = require('./entity/Book')

module.exports ={
    Query: {
        getAllBooks:async()=> await BookModel.find(),
        getDetailBook:async(_parent, args)=> await BookModel.findById(args._id),
    },
    Mutation:{
        createBook:async (_parent, args)=>{
            const model = new BookModel(args);
            await model.save();
            return model;
        },
        updateBook:async (_parent, args)=>{
            const model = await BookModel.findByIdAndUpdate(args._id,args,{new:true})
            return model;
        },
        deleteBook:async (_parent, args)=>{
            const model = await BookModel.findByIdAndDelete(args._id);
            if(model) return true;
            return false;

        }
    }
}