const Book = require("../models/book")

const getAllBooks = async (req, res)=>{
    try {
        const allBooks = await Book.find({});
        if(allBooks?.length > 0){
            res.status(200).json({success:true, message:'List of book successfully',data:allBooks})
        }else{
            res.status(404).json({success:false, message:'No Books found in the collection'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:'Something went! Please try again'})
    }
}

const getSingleBookById = async (req, res)=>{
   try {
      const getCurrentBookId = req.params.id;
      const bookDetailById = await Book.findById(getCurrentBookId);
      if(!bookDetailById){
       res.status(404).json({success:false, message:'Book with current ID is not found! please try with a different one'})
      }else{
        res.status(200).json({success:true, message:'Book successfully found',data:bookDetailById})
      }
   } catch (error) {
    console.log(error)
    res.status(500).json({success:false, message:'Something went! Please try again'})
   }
}

const addNewBook = async (req, res)=>{
   try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await  Book.create(newBookFormData)
    if(newlyCreatedBook){
        res.status(201).json({success:true, message:'Book added successfully', data:newlyCreatedBook})
    }else{
        res.status(400).json({success:false, message:'Book cannot be Created',data:bookDetailById})
    }
   } catch (error) {
    console.log(error);
    res.status(500).json({success:false, message:'Something went! Please try again'})
   }
}

const updateSingleBook = async (req, res)=>{

}
const updateBook = async (req, res)=>{
   try {
      const updatedBookFormData = req.body;
      const getCurrentBookId = req.params.id;
      const updatedBook = await Book.findByIdAndUpdate(getCurrentBookId,updatedBookFormData ,{new:true})
      if(!updatedBook){
        res.status(404).json({success:false, message:'Books is not found with this ID'})
     }else{
        res.status(200).json({success:true, message:'Book Data successfully updated',data:updatedBook})
     }
   } catch (error) {
    console.log(error);
    res.status(500).json({success:false, message:'Something went! Please try again'})
   }
}
const deleteBook = async (req, res)=>{
  try {
     const getCurrentBookId = req.params.id;
     const deletedBook = await Book.findByIdAndDelete(getCurrentBookId);
     if(!deletedBook){
        res.status(404).json({success:false, message:'Books is not found with this ID'})
     }
        res.status(200).json({success:true, message:'Book successfully deleted', data:deletedBook})
  } catch (error) {
    console.log(error);
    res.status(500).json({success:false, message:'Something went! Please try again'})
  }
}

module.exports = {  getAllBooks, getSingleBookById, addNewBook, updateSingleBook, updateBook, deleteBook }