export class arrayCheatSheet {

  employees: any =  {
                      data: [
                              {
                                  name:       "Tom",
                                  age:        25,
                                  gender:     "M",
                                  department: "Sales",
                                  fav_colour: "blue"
                              },
                              {
                                  name:       "Sarah",
                                  age:        36,
                                  gender:     "f",
                                  department: "Admin",
                                  fav_colour: "Yellow"
                              },
                              {
                                  name:       "Brad",
                                  age:        21,
                                  gender:     "M",
                                  department: "cleaner",
                                  fav_colour: "Blue"
                              },
                              {
                                  name:       "Dave",
                                  age:        51,
                                  gender:     "m",
                                  department: "Sales",
                                  fav_colour: null
                              },
                              {
                                  name:       "Rebecca",
                                  age:        45,
                                  gender:     "F",
                                  department: "Admin",
                                  fav_colour: "Black"
                              },
                              {
                                  name:       "Gunner",
                                  age:        19,
                                  gender:     "M",
                                  department: "sales",
                                  fav_colour: null
                              },
                              {
                                  name:       "Joshua",
                                  age:        27,
                                  gender:     null,
                                  department: "Sales",
                                  fav_colour: "black"
                              },
                              {
                                  name:       "Buck",
                                  age:        38,
                                  gender:     "M",
                                  department: "Cleaner",
                                  fav_colour: "Red"
                              },
                              {
                                  name:       "Nancy",
                                  age:        null,
                                  gender:     "F",
                                  department: "Sales",
                                  fav_colour: "yellow"
                              },
                              {
                                  name:       "Sindy",
                                  age:        36,
                                  gender:     null,
                                  department: "Management",
                                  fav_colour: "red"
                              }
                      ],
                      success:  true,
                      message:  "OK"
                    };
                   

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Iterate through @param array and push each name to @var names.
   * 
   * @param array - Accepts an array of objects containing 'name' as a param
   * 
   * @returns @var names
   */
  async getNames(array: any) {

    let names: any  = []; 
    await array.forEach((el: any) => names.push(el.name));
    return names;

  }

  /**
   * Sort the response from getNames() in alphabetical order.
   * 
   * @returns sorted array of names
   * 
   * __zone_symbol__value: Array(10)
      0: "Brad"
      1: "Buck"
      2: "Dave"
      3: "Gunner"
      4: "Joshua"
      5: "Nancy"
      6: "Rebecca"
      7: "Sarah"
      8: "Sindy"
      9: "Tom"
      length: 10
   * 
   */
  async getNamesInOrderByName() {
    
    const names: any  = await this.getNames(this.employees);
    return names.sort();

  }

  /**
   * Store 'this.employees' to @var sortedByAge without binding so that we do not mutate 'this.employees'.
   * 
   * Iterate through @var sortedByAge and sort by age from youngest to oldest.
   * 
   * Call getNames() to return an array of all names.
   * 
   * @returns @var names
   * 
   * __zone_symbol__value: Array(10)
      0: "Nancy"
      1: "Gunner"
      2: "Brad"
      3: "Tom"
      4: "Joshua"
      5: "Sarah"
      6: "Sindy"
      7: "Buck"
      8: "Rebecca"
      9: "Dave"
   * 
   */
  async getNamesInOrderByAge() {

    let sortedByAge: any  = [...this.employees];
    await sortedByAge.sort((a: any, b: any) => a.age - b.age);

    const names: any  = await this.getNames(sortedByAge);
    return names;

  }

  /**
   * Iterate through 'this.employees' and push each department to @var departments
   * For each element, change the string to ensure that the first character is uppercase.
   * 
   * Filter through @var departments and remove any duplicates.
   * 
   * @returns @var departments
   * 
   * __zone_symbol__value: Array(4)
      0: "Sales"
      1: "Admin"
      2: "Cleaner"
      3: "Management"
      length: 4
   * 
   */
  async getDepartments() {

    let departments: any  = []; 
    await this.employees.forEach((el: any) => departments.push(el.department[0].toUpperCase() + el.department.substring(1)));
    departments = await departments.filter((el: string, index: number) => departments.indexOf(el) === index);

    return departments;

  }

  /**
   * Iterate through 'this.employees' and push each fav_colour to @var colours if fav_colour is not null
   * For each element, change the string to ensure that the first character is uppercase.
   * 
   * Filter through @var colours and remove any duplicates.
   * 
   * @returns @var colours
   * 
   * __zone_symbol__value: Array(4)
      0: "Blue"
      1: "Yellow"
      2: "Black"
      3: "Red"
      length: 4
   * 
   */
  async getFavouriteColours() {

    let colours: any  = []; 
    await this.employees.forEach((el: any) => {
      if(el.fav_colour !== null) colours.push(el.fav_colour[0].toUpperCase() + el.fav_colour.substring(1))
    });
    colours = await colours.filter((el: string, index: number) => colours.indexOf(el) === index);

    return colours;

  }

  /**
   * @param male - is the user requesting all males?
   * 
   * Iterate through 'this.employees' and push each name to @var filterdByGender if gender is not null.
   * Only push names to @var filterdByGender in a certian gender based on @param male
   * 
   * @returns @var filterdByGender
   * 
   * If male equals true:
   * __zone_symbol__value: Array(5)
      0: "Tom"
      1: "Brad"
      2: "Dave"
      3: "Gunner"
      4: "Buck"
      length: 5
   * 
   *
   * If male equals false:
   * __zone_symbol__value: Array(3)
      0: "Sarah"
      1: "Rebecca"
      2: "Nancy"
      length: 3
   * 
   */
  async getNamesByGender(male: boolean) {

    let filterdByGender: any  = [];
    await this.employees.forEach((el: any) => {
      if(male && el.gender !== null && el.gender.toUpperCase() === 'M')   filterdByGender.push(el.name);
      if(!male && el.gender !== null && el.gender.toUpperCase() === 'F')  filterdByGender.push(el.name);
    });

    return filterdByGender;

  }

  /**
   * @param department - name of department user is requesting ages from.
   * 
   * Iterate through 'this.employees' and push each age to @var filteredByDepartment if @param department equals the elements department.
   * 
   * After iteration, if no ages are pushed to @var filteredByDepartment, return message.
   * 
   * @returns @var filteredByDepartment
   * 
   * If department equals 'sales':
   * __zone_symbol__value: Array(4)
      0: 25
      1: 51
      2: 19
      3: 27
      length: 4
   * 
   * If department equals 'sal':
   * __zone_symbol__value: Array(1)
      0: {error: 'No one in that department :('}
      length: 1
   * 
   */
  async getAgesByDepartment(department: string) {

    let filteredByDepartment: any  = [];
    await this.employees.forEach((el: any) => {
      if(department.toUpperCase() === el.department.toUpperCase() && el.age !== null) filteredByDepartment.push(el.age);
    });

    if(filteredByDepartment.length < 1) filteredByDepartment = [{ error: 'No one in that department :(' }]

    return filteredByDepartment;

  }

  /**
   * @param age - Age user is requesting.
   * 
   * Declare @var genders
   * Contians two key / value pairs: {
      males:    0,
      females:  0
    }
   * 
   * Iterate through 'this.employees'.
   * Add 1 to either males or females if condition is meet in iteration.
   * 
   * @returns @var genders
   * 
   * If age equals 37:
   * __zone_symbol__value:
      females: 1
      males: 3
   * 
   */
  async getGenderTotalsByAge(age: number) {
    
    let genders: any  = {
      males:    0,
      females:  0
    };

    await this.employees.forEach((el: any) => {
      if(el.age < age && el.age !== null && el.gender !== null && el.gender.toUpperCase() === 'M')  genders.males++;
      if(el.age < age && el.age !== null && el.gender !== null && el.gender.toUpperCase() === 'F')  genders.females++;
    });

    return genders;

  }
  
}
