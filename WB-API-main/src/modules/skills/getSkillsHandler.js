const returnSelectedSkills = require('../../codedData/skills');

const skillsHandler = (resp, data) => {
    
    const skillId = data && data.skillId;

    console.log("SKILLS: ", skillId);

    resp.status(200).json({ skills:  returnSelectedSkills( skillId ? [skillId] : "all")});
}

module.exports = skillsHandler;