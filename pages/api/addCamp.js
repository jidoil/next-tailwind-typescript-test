// pages/api/saveFormData.js
import fs from 'fs/promises';

export default async function addCamp(req, res) {
    if (req.method === 'POST') {
        try {
            const formData = req.body;
            const jsonString = JSON.stringify(formData, null, 2);
            console.log(jsonString)
            await fs.writeFile('public/db/camp-list.json', jsonString);
            res.status(200).json({ message: 'Form data saved successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error saving form data' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
