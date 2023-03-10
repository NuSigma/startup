// Recipe Modal Reset on Close
$('#AddNewRecipeScrollable').on('hidden.bs.modal', function (e) {
    $(this)
      .find("input,textarea,select")
         .val('')
         .end()
      .find("input[type=checkbox], input[type=radio]")
         .prop("checked", "")
         .end();
  })
// Recipe Steps Functions
function insertPrepStep() 
{
    // create new list element
    const newStep = document.createElement('li');
    newStep.style="margin-bottom: 20px;"
    // create new step instruction
    const newInstr = document.createElement('div');
    newInstr.className = "d-flex";
    const newInstrForm = document.createElement('input');
    newInstrForm.className = "form-control form-control-sm";
    newInstrForm.type = "text";
    newInstrForm.placeholder = "Step Instruction: i.e Add Butter and Whisk";
    newInstrForm.ariaLabel = "Step Instruction";
    newInstr.appendChild(newInstrForm);
    newStep.appendChild(newInstr);
    //create new step note
    const newNote = document.createElement('form');
    newNote.className = "form-floating";
    const newNoteInput = document.createElement('input');
    newNoteInput.className = "form-control";
    newNoteInput.type = "text";
    newNoteInput.id = "floatingInputValue";
    newNoteInput.placeholder = "Step Description";
    const newNoteLabel = document.createElement('label');
    newNoteLabel.htmlFor = "floatingInputValue";
    newNoteLabel.textContent = "Step Notes(Optional)"
    newNote.appendChild(newNoteInput);
    newNote.appendChild(newNoteLabel);

    const prepList = document.getElementById('PrepList');
    newStep.appendChild(newInstr);
    newStep.appendChild(newNote);

    prepList.appendChild(newStep);
}

function removePrepStep()
{

}

// Ingredient Functions
function insertIngredient() 
{
    // Create new list
    const newIngr = document.createElement('li');
    newIngr.style="margin-bottom: 20px;"
    // new input group
    const newGroup = document.createElement('div');
    newGroup.className = "input-group";
    // new amount dialog box
    const newAmt = document.createElement('div');
    newAmt.style = "width: 6em;"
    const newAmtIn = document.createElement('input');
    newAmtIn.className = "form-control";
    newAmtIn.type="number";
    newAmtIn.min="0";
    newAmtIn.placeholder="Amount";
    newAmtIn.ariaLabel="Unit Amount";
    newAmt.appendChild(newAmtIn);
    // new Unit Selector
    const newUnitSel = document.createElement('div');
    newUnitSel.style="width: 8em;";
    const newSel = document.createElement('select');
    newSel.className="form-select";
    newSel.ariaLabel-"Select Units";

    //TEMP units array for creating newOpt
    let units = ['grams', 'cups', 'ounces', '[Add Custom Unit - Add later]'];
    for(i in units)
    {
        let newOpt = document.createElement('option');
        newOpt.value = units[i];
        newOpt.textContent = units[i];
        newSel.appendChild(newOpt);
    }
    newUnitSel.appendChild(newSel);

    // new Ingredient name input
    const newIngName = document.createElement('input');
    newIngName.className="form-control form-control-sm";
    newIngName.type="text";
    newIngName.placeholder="Ingredient Name";
    newIngName.ariaLabel="Ingredient";

    newGroup.appendChild(newAmt);
    newGroup.appendChild(newUnitSel);
    newGroup.appendChild(newIngName);

    newIngr.appendChild(newGroup);

    const ingList = document.getElementById('ingList');
    ingList.appendChild(newIngr);
    
}
