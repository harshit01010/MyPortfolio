import { projectsData } from "@/projectsData";

export default function handler(req,res){
    res.status(200).json(projectsData)
}