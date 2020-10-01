import ClassroomConfiguration from '../models/classroomConfiguration.model'

/*
@fvillarrealcespedes:
Exports five methods for classroomConfiguration CRUD operations.
*/ 
export default{
    /*
    @fvillarrealcespedes:
    POST a new classroomConfiguration given a request body.
    */
    async createClassroomConfiguration(req, res){
        const classroomConfiguration = new ClassroomConfiguration(
            req.body
        );
        await classroomConfiguration.save((err, classroomConfiguration) => {
            if(err){
                return res.status(500).send(
                    err
                );
            }
            res.status(200).json({
                message: 'ClassroomConfiguration successfully created!', classroomConfiguration
            });
        });
    },

    /*
    @fvillarrealcespedes:
    GET all classroomConfigurations.
    */    
    async readClassroomConfigurations(req, res){
        await ClassroomConfiguration.find((err, classroomConfigurations) => {
            if(err){
                return res.status(500).send(
                    err
                );
            }
            res.status(200).json({
                classroomConfigurations
            });
        });
    },

    /*
    @fvillarrealcespedes:
    UPDATE a classroomConfiguration given the id and a request body.
    */
    async updateClassroomConfiguration(req, res){
        const id = req.params.id;
        await ClassroomConfiguration.findByIdAndUpdate({_id: id}, req.body, {new: true}, (err, classroomConfiguration) => {
            if(err){
                return res.status(500).send(
                    err
                );
            }
            res.status(200).json({
                message: 'ClassroomConfiguration successfully updated!', classroomConfiguration
            });
        });
    },

    /*
    @fvillarrealcespedes:
    DELETE a classroomConfiguration given the id.
    */    
    async deleteClassroomConfiguration(req, res){
        const id = req.params.id;
        await ClassroomConfiguration.findByIdAndDelete({_id: id}, (err, classroomConfiguration) => {
            if(err){
                return res.status(500).send(
                    err
                );
            }
            res.status(200).json({
                message: 'ClassroomConfiguration successfully deleted!', classroomConfiguration
            });
        });
    },

    /*
    @fvillarrealcespedes:
    GET a classroomConfiguration given the id.
    */     
    async readOneClassroomConfiguration(req, res){
        const id = req.params.id;
        await ClassroomConfiguration.findOne({_id: id}, (err, classroomConfiguration) => {
            if(err){
                return res.status(500).send(
                    err
                );
            }
            res.status(200).json({
                classroomConfiguration
            });
        })
    }
}