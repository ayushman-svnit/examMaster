const mongoose=require("mongoose");
const Question=require("../models/ques.js");

main()
.then(()=>{
    console.log("connected to database");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ExamMaster');
}

Question.deleteMany({})
.then(()=>{
    console.log("Questions deleted successfully");
})
.catch(()=>{
    console.log("Some error occured.")
})

const questions = [
    // q1 m
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "math",
      quesType: "SCQ",
      ques: "",
      isImg: true,
      quesImg: "http://localhost:8000/m-q1.png",
      isOptImg: true,
      opt1: "",
      opt1Img: "http://localhost:8000/q1-o1.png",
      opt2: "",
      opt2Img: "http://localhost:8000/q1-o2.png",
      opt3: "",
      opt3Img: "http://localhost:8000/q1-o3.png",
      opt4: "",
      opt4Img: "http://localhost:8000/q1-o4.png",
      ans: "B",
    },
    //   q2 - m
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "math",
      quesType: "SCQ",
      ques: "A student appears for a quiz consisting of only true-false type questions and answers all the questions. The student knows the answers of some questions and guesses the answers for the remaining questions.  Whenever the student knows the answer of a question, he gives the correct answer. Assume that the probability of the student giving the correct answer for a question, given that he has guessed it, is 1/2 Also assume that the probability of the answer for a question being guessed, given that the student's answer is correct, is 1/6 Then the probability that the student knows the answer of a randomly chosen question is ",
      isImg: false,
      quesImg: "",
      isOptImg: false,
      opt1: "1/12",
      opt1Img: "",
      opt2: "1/7",
      opt2Img: "",
      opt3: "5/7",
      opt3Img: "",
      opt4: "5/12",
      opt4Img: "",
      ans: "C",
    },
    {
      // q 3 - m
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "math",
      quesType: "MCQ",
      ques: "",
      isImg: true,
      quesImg: "http://localhost:8000/m-q3.png",
      isOptImg: true,
      opt1: "",
      opt1Img: "http://localhost:8000/q3-o1.png",
      opt2: "",
      opt2Img: "http://localhost:8000/q3-o2.png",
      opt3: "",
      opt3Img: "http://localhost:8000/q3-o3.png",
      opt4: "",
      opt4Img: "http://localhost:8000/q3-o4.png",
      ans: "ACD",
    },
    //   m-q4
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "math",
      quesType: "MCQ",
      ques: "",
      isImg: true,
      quesImg: "http://localhost:8000/m-q4.png",
      isOptImg: true,
      opt1: "",
      opt1Img: "http://localhost:8000/q4-o1.png",
      opt2: "",
      opt2Img: "http://localhost:8000/q4-o2.png",
      opt3: "",
      opt3Img: "http://localhost:8000/q4-o3.png",
      opt4: "",
      opt4Img: "http://localhost:8000/q4-o4.png",
      ans: "BCD",
    },
    //   m-q5
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "math",
      quesType: "Num",
      ques: "",
      isImg: true,
      quesImg: "http://localhost:8000/m-q5.png",
      isOptImg: false,
      opt1: "",
      opt1Img: "",
      opt2: "",
      opt2Img: "",
      opt3: "",
      opt3Img: "",
      opt4: "",
      opt4Img: "",
      input: "8",
    },
    //   m-q6
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "math",
      quesType: "Num",
      ques: "",
      isImg: true,
      quesImg: "http://localhost:8000/m-q6.png",
      isOptImg: false,
      opt1: "",
      opt1Img: "",
      opt2: "",
      opt2Img: "",
      opt3: "",
      opt3Img: "",
      opt4: "",
      opt4Img: "",
      input: "20",
    },
    //   p-q1
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "phy",
      quesType: "SCQ",
      ques: "A block of mass 5 kg moves along the x-direction subject to the force F = (-20x + 10) N, with the value of x in metre. At time t = 0 s, it is at rest at position x = 1 m. The position and momentum of the block at t = (𝜋/4) s are",
      isImg: false,
      quesImg: "",
      isOptImg: false,
      opt1: "-0.5 m, 5 kg m/s",
      opt1Img: "",
      opt2: "0.5 m, 0 kg m/s",
      opt2Img: "",
      opt3: "0.5 m, -5 kg m/s",
      opt3Img: "",
      opt4: "-1 m, 5 kg m/s",
      opt4Img: "",
      ans: "C",
    },
    // p-q2
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "phy",
      quesType: "SCQ",
      ques: "",
      isImg: true,
      quesImg: "http://localhost:8000/m-q6.png",
      isOptImg: false,
      opt1: "(2n,-n,-n,-n)",
      opt1Img: "",
      opt2: "(n,-n,-2n,-n)",
      opt2Img: "",
      opt3: "(n,-n,-n,-2n)",
      opt3Img: "",
      opt4: "(2n,-n,-2n,-2n)",
      opt4Img: "",
      ans: "A",
    },
    // p-q3
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "phy",
      quesType: "MCQ",
      ques: "A particle of mass 𝑚 is moving in a circular orbit under the influence of the central force F(r)=-kr, corresponding to the potential energy V(r)=kr^2/2, where k is a positive force constant and r is the radial distance from the origin. According to the Bohr's quantization rule, the angular momentum of the particle is given by L=𝑛ℏ, where ℏ'=h/(2𝜋), h is the Planck's constant, and n a positive integer. If v and E are the speed and total energy of the particle, respectively, then which of the following expression(s) is(are) correct?",
      isImg: false,
      quesImg: "",
      isOptImg: true,
      opt1: "",
      opt1Img: "http://localhost:8000/p-q3-o1.png",
      opt2: "",
      opt2Img: "http://localhost:8000/p-q3-o2.png",
      opt3: "",
      opt3Img: "http://localhost:8000/p-q3-o3.png",
      opt4: "",
      opt4Img: "http://localhost:8000/p-q3-o4.png",
      ans: "ABC",
    },
    // p-q4
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "phy",
      quesType: "MCQ",
      ques: "",
      isImg: true,
      quesImg: "http://localhost:8000/p-q4.png",
      isOptImg: false,
      opt1: "For n = 1.42, h = 50 cm.",
      opt1Img: "",
      opt2: "For n = 1.35, h = 36 cm.",
      opt2Img: "",
      opt3: "For n = 1.45, h = 65 cm.",
      opt3Img: "",
      opt4: "For n = 1.48, h = 85 cm.",
      opt4Img: "",
      ans: "AB",
    },
    // p-q5
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "phy",
      quesType: "Num",
      ques: " The specific heat capacity of a substance is temperature dependent and is given by the formula C = kT, where k is a constant of suitable dimensions in SI units, and T is the absolute temperature. If the heat required to raise the temperature of 1 kg of the substance from -73 °C to 27 °C is nk, the value of n is _____.",
      isImg: false,
      quesImg: "",
      isOptImg: false,
      opt1: "",
      opt1Img: "",
      opt2: "",
      opt2Img: "",
      opt3: "",
      opt3Img: "",
      opt4: "",
      opt4Img: "",
      input: "25000",
    },
    // p-q6
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "phy",
      quesType: "Num",
      ques: "",
      isImg: true,
      quesImg: "http://localhost:8000/p-q6.png",
      isOptImg: false,
      opt1: "",
      opt1Img: "",
      opt2: "",
      opt2Img: "",
      opt3: "",
      opt3Img: "",
      opt4: "",
      opt4Img: "",
      input: "12",
    },
    // c-q1
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "chem",
      quesType: "SCQ",
      ques: "",
      isImg: true,
      quesImg: "http://localhost:8000/c-q1.png",
      isOptImg: true,
      opt1: "",
      opt1Img: "http://localhost:8000/c-q1-o1.png",
      opt2: "",
      opt2Img: "http://localhost:8000/c-q1-o2.png",
      opt3: "",
      opt3Img: "http://localhost:8000/c-q1-o3.png",
      opt4: "",
      opt4Img: "http://localhost:8000/c-q1-o4.png",
      ans: "B",
    },
    // c-q2
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "chem",
      quesType: "SCQ",
      ques: "  A closed vessel contains 10 g of an ideal gas X at 300 K, which exerts 2 atm pressure. At the same temperature, 80 g of another ideal gas Y is added to it and the pressure becomes 6 atm. The ratio of root mean square velocities of X and Y at 300 K is",
      isImg: false,
      quesImg: "",
      isOptImg: false,
      opt1: "2√2 : √3",
      opt1Img: "",
      opt2: "2√2 : 1",
      opt2Img: "",
      opt3: "1 : 2",
      opt3Img: "",
      opt4: "2 : 1",
      opt4Img: "",
      ans: "D",
    },
    // c-q3
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "chem",
      quesType: "MCQ",
      ques: "Among the following, the correct statement(s) for electrons in an atom is(are) ",
      isImg: false,
      quesImg: "",
      isOptImg: false,
      opt1: "Uncertainty principle rules out the existence of definite paths for electrons.",
      opt1Img: "",
      opt2: "The energy of an electron in 2s orbital of an atom is lower than the energy of an electron that is infinitely far away from the nucleus.",
      opt2Img: "",
      opt3: "According to Bohr's model, the most negative energy value for an electron is given by n = 1, which corresponds to the most stable orbit.",
      opt3Img: "",
      opt4: "According to Bohr's model, the magnitude of velocity of electrons increases with increase in values of n.",
      opt4Img: "",
      ans: "ABC",
    },
    // c-q4
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "chem",
      quesType: "MCQ",
      ques: "Reaction of iso-propylbenzene with O2 followed by the treatment with H3O+ forms phenol and a by-product P. Reaction of P with 3 equivalents of Cl2 gives compound Q. Treatment of Q with Ca(OH)2 produces compound R and calcium salt S. The correct statement(s) regarding P, Q, R and S is(are) ",
      isImg: false,
      quesImg: "",
      isOptImg: false,
      opt1: "methyl ester of L-phenylalanyl-L-aspartic acid",
      opt1Img: "",
      opt2: "Reaction of R with O2 in the presence of light gives phosgene gas",
      opt2Img: "",
      opt3: "Q reacts with aqueous NaOH to produce Cl3CCH2OH and Cl3CCOONa",
      opt3Img: "",
      opt4: "S on heating gives P",
      opt4Img: "",
      ans: "ABD",
    },
    // c-q5
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "chem",
      quesType: "Num",
      ques: "",
      isImg: true,
      quesImg: "http://localhost:8000/c-q5.png",
      isOptImg: false,
      opt1: "",
      opt1Img: "",
      opt2: "",
      opt2Img: "",
      opt3: "",
      opt3Img: "",
      opt4: "",
      opt4Img: "",
      input: "3",
    },
    // c-q6
    {
      hostid: "67e59313e4d6f4e55f1dd378",
      paper: 1,
      subject: "chem",
      quesType: "Num",
      ques: "",
      isImg: true,
      quesImg: "http://localhost:8000/c-q6.png",
      isOptImg: false,
      opt1: "",
      opt1Img: "",
      opt2: "",
      opt2Img: "",
      opt3: "",
      opt3Img: "",
      opt4: "",
      opt4Img: "",
      input: "909",
    },
  ];
  
const questions1 = [
  // ==================== MATHEMATICS (18 Questions) ====================
  // Math SCQ (6 questions)
  {
    hostid: "67e59313e4d6f4e55f1dd379",
    paper: 1,
    subject: "math",
    quesType: "SCQ",
    ques: "If A and B are two events such that P(A) = 0.4, P(B) = 0.8 and P(B|A) = 0.6, then P(A|B) is:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "0.2",
    opt2: "0.3",
    opt3: "0.4",
    opt4: "0.5",
    ans: "B"
  },

  // Math MCQ (6 questions)
  {
    hostid: "67e59313e4d6f4e55f1dd379",
    paper: 1,
    subject: "math",
    quesType: "MCQ",
    ques: "Which of the following are true for the function f(x) = x³ - 3x?",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "It has two critical points",
    opt2: "It has one point of inflection",
    opt3: "It is increasing in (-∞, -1) ∪ (1, ∞)",
    opt4: "f''(x) > 0 for all x > 0",
    ans: "ABC"
  },

  // Math Numerical (6 questions)
  {
    hostid: "67e59313e4d6f4e55f1dd379",
    paper: 1,
    subject: "math",
    quesType: "Num",
    ques: "The number of 4-digit numbers that can be formed using digits 1,2,3,4,5 without repetition and divisible by 4 is:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    input: "24"
  },
  // ... 5 more Math Numerical questions ...

  // ==================== PHYSICS (18 Questions) ====================
  // Physics SCQ (6 questions)
  {
    hostid: "67e59313e4d6f4e55f1dd379",
    paper: 1,
    subject: "phy",
    quesType: "SCQ",
    ques: "A projectile is fired at 30° with velocity 40 m/s. Its range will be (g = 10 m/s²):",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "80√3 m",
    opt2: "160√3 m",
    opt3: "80 m",
    opt4: "160 m",
    ans: "A"
  },
  // ... 5 more Physics SCQ questions ...

  // Physics MCQ (6 questions)
  {
    hostid: "67e59313e4d6f4e55f1dd379",
    paper: 1,
    subject: "phy",
    quesType: "MCQ",
    ques: "For a satellite in circular orbit around Earth:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "KE = -TE/2",
    opt2: "PE = 2TE",
    opt3: "Angular momentum is conserved",
    opt4: "Time period ∝ r³/²",
    ans: "ACD"
  },
  // ... 5 more Physics MCQ questions ...

  // Physics Numerical (6 questions)
  {
    hostid: "67e59313e4d6f4e55f1dd379",
    paper: 1,
    subject: "phy",
    quesType: "Num",
    ques: "A wire of resistance 12Ω is stretched to double its length. Its new resistance (in Ω) is:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    input: "48"
  },
  // ... 5 more Physics Numerical questions ...

  // ==================== CHEMISTRY (18 Questions) ====================
  // Chemistry SCQ (6 questions)
  {
    hostid: "67e59313e4d6f4e55f1dd379",
    paper: 1,
    subject: "chem",
    quesType: "SCQ",
    ques: "The geometry and hybridization of XeF₄ are:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "Square planar, sp³d²",
    opt2: "Tetrahedral, sp³",
    opt3: "Octahedral, sp³d²",
    opt4: "Trigonal bipyramidal, sp³d",
    ans: "A"
  },
  // ... 5 more Chemistry SCQ questions ...

  // Chemistry MCQ (6 questions)
  {
    hostid: "67e59313e4d6f4e55f1dd379",
    paper: 1,
    subject: "chem",
    quesType: "MCQ",
    ques: "Which statements about d-block elements are correct?",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "Show variable oxidation states",
    opt2: "Form colored complexes",
    opt3: "Have high ionization energies",
    opt4: "Act as good catalysts",
    ans: "ABD"
  },
  // ... 5 more Chemistry MCQ questions ...

  // Chemistry Numerical (6 questions)
  {
    hostid: "67e59313e4d6f4e55f1dd379",
    paper: 1,
    subject: "chem",
    quesType: "Num",
    ques: "The pH of 0.01M CH₃COOH (Ka=1.8×10⁻⁵) is:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    input: "3.37"
  }
  // ... 5 more Chemistry Numerical questions ...
];

const newQuestions = [
  // ============= MATHEMATICS =============
  {
    hostid: "67e59313e4d6f4e55f1dd37a",
    paper: 1,
    subject: "math",
    quesType: "SCQ",
    ques: "The minimum value of the function f(x) = x³ - 3x² + 6 in the interval [0,2] is:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "2",
    opt2: "4",
    opt3: "6",
    opt4: "8",
    ans: "C"
  },
  {
    hostid: "67e59313e4d6f4e55f1dd37a",
    paper: 1,
    subject: "math",
    quesType: "MCQ",
    ques: "Which of the following are true for the parabola y² = 4ax?",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "Focus at (a,0)",
    opt2: "Directrix x = -a",
    opt3: "Length of latus rectum = 4a",
    opt4: "Vertex at (0,0)",
    ans: "ABCD"
  },
  {
    hostid: "67e59313e4d6f4e55f1dd37a",
    paper: 1,
    subject: "math",
    quesType: "Num",
    ques: "If log₂(log₃(81)) = x, then the value of x is:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    ans: "2"
  },

  // ============= PHYSICS =============
  {
    hostid: "67e59313e4d6f4e55f1dd37a",
    paper: 1,
    subject: "phy",
    quesType: "SCQ",
    ques: "The work done in moving a charge of 5C between two points having potential difference of 20V is:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "100 J",
    opt2: "50 J",
    opt3: "20 J",
    opt4: "10 J",
    ans: "A"
  },
  {
    hostid: "67e59313e4d6f4e55f1dd37a",
    paper: 1,
    subject: "phy",
    quesType: "MCQ",
    ques: "Which of the following statements about simple harmonic motion are correct?",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "Acceleration is proportional to displacement",
    opt2: "Total energy remains constant",
    opt3: "Frequency depends on amplitude",
    opt4: "Velocity is maximum at mean position",
    ans: "ABD"
  },
  {
    hostid: "67e59313e4d6f4e55f1dd37a",
    paper: 1,
    subject: "phy",
    quesType: "Num",
    ques: "A car accelerates uniformly from rest to 20 m/s in 5 seconds. The distance covered (in meters) is:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    ans: "50"
  },

  // ============= CHEMISTRY =============
  {
    hostid: "67e59313e4d6f4e55f1dd37a",
    paper: 1,
    subject: "chem",
    quesType: "SCQ",
    ques: "The hybridization of carbon in C₂H₂ is:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "sp",
    opt2: "sp²",
    opt3: "sp³",
    opt4: "dsp²",
    ans: "A"
  },
  {
    hostid: "67e59313e4d6f4e55f1dd37a",
    paper: 1,
    subject: "chem",
    quesType: "MCQ",
    ques: "Which of the following are characteristics of ideal solutions?",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "ΔH_mix = 0",
    opt2: "ΔV_mix = 0",
    opt3: "Obey Raoult's law",
    opt4: "Components are chemically similar",
    ans: "ABC"
  },
  {
    hostid: "67e59313e4d6f4e55f1dd37a",
    paper: 1,
    subject: "chem",
    quesType: "Num",
    ques: "The number of sigma (σ) bonds in a benzene molecule (C₆H₆) is:",
    isImg: false,
    quesImg: "",
    isOptImg: false,
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    ans: "12"
  }
];

Question.insertMany(questions)
.catch(()=>{
    console.log("Questions cannot be added");
});
Question.insertMany(questions1)
.catch(()=>{
    console.log("Questions cannot be added");
});
Question.insertMany(newQuestions)
.catch(()=>{
    console.log("Questions cannot be added");
});
