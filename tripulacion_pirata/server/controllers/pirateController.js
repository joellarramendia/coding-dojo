const Pirate = require('../models/pirateModel');

const createPirate = async (req, res) => {
    try {
        const { name, imageUrl, numberOfChests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand } = req.body;
        // Verifica si ya hay un capitán en la base de datos
        const existingCaptain = await Pirate.findOne({ crewPosition: 'captain' });
        if (crewPosition === 'captain' && existingCaptain) {
            return res.status(400).json({ error: 'There is already a captain.' });
        }
        
        const newPirate = new Pirate({
            name,
            imageUrl,
            numberOfChests,
            catchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        });

        await newPirate.save();

        res.status(201).json({ message: 'Pirate added successfully' });
    } catch (error) {
        console.error('Error adding pirate:', error);
        res.status(500).json({ error: 'Error adding pirate' });
    }
}

//traer a todos los piratas
const getPirates = async (req, res) => {
    try {
        const pirates = await Pirate.find();
        res.status(200).json(pirates);
    } catch (error) {
        console.error('Error getting pirates:', error);
        res.status(500).json({ error: 'Error getting pirates' });
    }

}

//traer a un pirata
const getPirate = async (req, res) => {
    try {
        const pirate = await Pirate.findOne({_id: req.params.id});
        res.status(200).json(pirate);
    } catch (error) {
        console.error('Error getting pirate:', error);
        res.status(500).json({ error: 'Error getting pirate' });
    }
}

//editar pirata
const updatePirate = async (req, res) => {
    try {
        const { name, imageUrl, numberOfChests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand } = req.body;
        await Pirate.findOneAndUpdate({_id: req.params.id}, {
            name,
            imageUrl,
            numberOfChests,
            catchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        });
        res.status(200).json({ message: 'Pirate updated successfully' });
    }
    catch (error) {
        console.error('Error updating pirate:', error);
        res.status(500).json({ error: 'Error updating pirate' });
    }
}

//eliminar pirata
const deletePirate = async (req, res) => {
    try {
        await Pirate.deleteOne({_id: req.params.id});
        res.status(200).json({ message: 'Pirate deleted successfully' });
    } catch (error) {
        console.error('Error deleting pirate:', error);
        res.status(500).json({ error: 'Error deleting pirate' });
    }
}


module.exports = {
    createPirate,
    getPirates,
    getPirate,
    updatePirate,
    deletePirate
}
