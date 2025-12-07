// seedData.js - Backend script to populate MongoDB with test data (ES Modules)
import mongoose from 'mongoose';
import MoU from './models/mou.model.js'; // Make sure this path is correct!
import dotenv from 'dotenv';

dotenv.config();

// Function to calculate dates relative to today
const getDates = () => {
  const today = new Date();
  
  // For expiring soon: 15 days from now
  const expiringSoon = new Date();
  expiringSoon.setDate(today.getDate() + 15);
  
  // For recent future: 3 months from now
  const recentFuture = new Date();
  recentFuture.setMonth(today.getMonth() + 3);
  
  // For distant future: 1 year from now
  const distantFuture = new Date();
  distantFuture.setFullYear(today.getFullYear() + 1);
  
  // For expired: 6 months ago
  const expired = new Date();
  expired.setMonth(today.getMonth() - 6);
  
  // Format as YYYY-MM-DD
  return {
    today: today.toISOString().split('T')[0],
    expiringSoon: expiringSoon.toISOString().split('T')[0],
    recentFuture: recentFuture.toISOString().split('T')[0],
    distantFuture: distantFuture.toISOString().split('T')[0],
    expired: expired.toISOString().split('T')[0]
  };
};

const dates = getDates();

const testMous = [
  {
    title: "AI Research Collaboration with Riphah",
    university: "Riphah International University",
    department: "Computer Science Department",
    type: "Research Collaboration",
    duration: "2 Years",
    description: "Joint research on Artificial Intelligence applications in healthcare",
    objectives: [
      "Joint research publications in AI journals",
      "Student internship programs in AI labs",
      "Faculty exchange programs",
      "Shared computing resources"
    ],
    terms: [
      "Duration: 2 years renewable",
      "Intellectual property shared 70-30",
      "Minimum 15 internships per year",
      "Quarterly progress reviews"
    ],
    contactPerson: "Dr. Sarah Ahmed",
    contactEmail: "sarah.ahmed@riphah.edu.pk",
    contactPhone: "+92 51 1234567",
    status: "Active",
    category: "active",
    companyName: "Tech Solutions Inc",
    address: "Blue Area, Islamabad",
    startDate: "2024-01-15",
    endDate: dates.distantFuture, // 1 YEAR FROM NOW - Active
    industryPartner: "Tech Solutions Inc",
    industryLogo: "https://ui-avatars.com/api/?name=Tech+Solutions&background=193648&color=fff&size=256",
    universityLogo: "https://www.riphah.edu.pk/wp-content/uploads/2023/01/cropped-Riphah-logo.png"
  },
  {
    title: "Student Training Program with NUST",
    university: "NUST University",
    department: "Software Engineering Department",
    type: "Training & Placement",
    duration: "1 Year",
    description: "Annual training program for final year software engineering students",
    objectives: [
      "Train 60 students in modern web technologies",
      "Provide industry certifications",
      "Job placement for top 20 students",
      "Curriculum development workshops"
    ],
    terms: [
      "Training costs shared 60-40",
      "Guaranteed interviews for all trainees",
      "Monthly technical sessions",
      "Certification exams provided free"
    ],
    contactPerson: "Prof. Ali Raza",
    contactEmail: "ali.raza@nust.edu.pk",
    contactPhone: "+92 51 7654321",
    status: "Active",
    category: "active",
    companyName: "Cloud Systems Ltd",
    address: "Sector H-9, Islamabad",
    startDate: "2024-02-01",
    endDate: dates.recentFuture, // 3 MONTHS FROM NOW - Active
    industryPartner: "Cloud Systems Ltd",
    industryLogo: "https://ui-avatars.com/api/?name=Cloud+Systems&background=2C5364&color=fff&size=256",
    universityLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/National_University_of_Sciences_and_Technology_logo.png/220px-National_University_of_Sciences_and_Technology_logo.png"
  },
  {
    title: "Blockchain Technology Transfer - EXPIRING SOON",
    university: "LUMS University",
    department: "Computer Engineering Department",
    type: "Technology Transfer",
    duration: "3 Years",
    description: "Transfer of blockchain research for commercial applications - EXPIRING IN 15 DAYS!",
    objectives: [
      "Commercialize blockchain patents",
      "Develop joint software products",
      "Create spin-off startup company",
      "Revenue sharing implementation"
    ],
    terms: [
      "Revenue sharing 50-50",
      "Patent filing costs covered",
      "Exclusive license for 5 years",
      "Annual royalty payments"
    ],
    contactPerson: "Dr. Usman Khalid",
    contactEmail: "usman.khalid@lums.edu.pk",
    contactPhone: "+92 42 9876543",
    status: "Active",
    category: "active",
    companyName: "Blockchain Tech",
    address: "Gulberg, Lahore",
    startDate: "2023-06-01",
    endDate: dates.expiringSoon, // 15 DAYS FROM NOW - WILL SHOW AS "EXPIRING SOON"
    industryPartner: "Blockchain Tech",
    industryLogo: "https://ui-avatars.com/api/?name=Blockchain+Tech&background=10B981&color=fff&size=256",
    universityLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/LUMS_logo.png/220px-LUMS_logo.png"
  },
  {
    title: "New Draft MoU with FAST University",
    university: "FAST University",
    department: "Data Science Department",
    type: "Research Collaboration",
    duration: "2 Years",
    description: "Collaboration on big data analytics research (DRAFT VERSION)",
    objectives: [
      "Research on big data algorithms",
      "Data analytics workshops",
      "Joint conference presentations",
      "Student research projects"
    ],
    terms: [
      "Duration: 2 years renewable",
      "Data sharing agreements needed",
      "Review after 6 months",
      "Publication rights to be finalized"
    ],
    contactPerson: "Dr. Fatima Noor",
    contactEmail: "fatima.noor@fast.edu.pk",
    contactPhone: "+92 51 5555555",
    status: "Draft",
    category: "draft",
    companyName: "Data Analytics Corp",
    address: "F-7, Islamabad",
    startDate: dates.today,
    endDate: dates.distantFuture,
    industryPartner: "Data Analytics Corp",
    industryLogo: "https://ui-avatars.com/api/?name=Data+Analytics&background=F59E0B&color=fff&size=256",
    universityLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/FAST-NU_logo.svg/220px-FAST-NU_logo.svg.png"
  },
  {
    title: "Internship Program Proposal",
    university: "COMSATS University",
    department: "Electrical Engineering",
    type: "Student Internships",
    duration: "6 Months",
    description: "Proposed internship program for EE students (DRAFT)",
    objectives: [
      "Provide practical training to 30 students",
      "Industry exposure in power systems",
      "Mentorship by senior engineers",
      "Potential job offers"
    ],
    terms: [
      "Stipend to be determined",
      "Insurance coverage needed",
      "Transportation arrangements pending",
      "Working hours to be finalized"
    ],
    contactPerson: "Engr. Kamran Shah",
    contactEmail: "kamran.shah@comsats.edu.pk",
    contactPhone: "+92 51 7777777",
    status: "Draft",
    category: "draft",
    companyName: "Power Solutions Ltd",
    address: "I-9, Islamabad",
    startDate: dates.today,
    endDate: dates.recentFuture,
    industryPartner: "Power Solutions Ltd",
    industryLogo: "https://ui-avatars.com/api/?name=Power+Solutions&background=EF4444&color=fff&size=256",
    universityLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Comsats_Logo.svg/220px-Comsats_Logo.svg.png"
  },
  {
    title: "Expired Robotics Research Agreement",
    university: "UET Lahore",
    department: "Robotics Engineering",
    type: "Research Collaboration",
    duration: "1 Year",
    description: "Robotics research collaboration that has now expired",
    objectives: [
      "Develop robotic prototypes",
      "Publish research papers",
      "Train students in robotics",
      "Industrial applications"
    ],
    terms: [
      "Duration: 1 year completed",
      "All IP rights transferred",
      "Final report submitted",
      "No renewal planned"
    ],
    contactPerson: "Dr. Zainab Malik",
    contactEmail: "zainab.malik@uet.edu.pk",
    contactPhone: "+92 42 1111111",
    status: "Expired",
    category: "expired",
    companyName: "RoboTech Industries",
    address: "Model Town, Lahore",
    startDate: "2022-01-01",
    endDate: dates.expired, // 6 MONTHS AGO - DEFINITELY EXPIRED
    industryPartner: "RoboTech Industries",
    industryLogo: "https://ui-avatars.com/api/?name=RoboTech+Ind&background=6B7280&color=fff&size=256",
    universityLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/UET_Lahore_logo.png/220px-UET_Lahore_logo.png"
  },
  {
    title: "Faculty Exchange Program",
    university: "Bahria University",
    department: "Business Administration",
    type: "Faculty Exchange",
    duration: "5 Years",
    description: "Long-term faculty exchange program for business studies",
    objectives: [
      "Exchange 2 faculty members annually",
      "Joint course development",
      "Research collaboration",
      "International conference participation"
    ],
    terms: [
      "Duration: 5 years",
      "Travel costs shared equally",
      "Accommodation provided",
      "Teaching load: 2 courses per semester"
    ],
    contactPerson: "Prof. Ahmed Hassan",
    contactEmail: "ahmed.hassan@bahria.edu.pk",
    contactPhone: "+92 51 8888888",
    status: "Active",
    category: "active",
    companyName: "Global Business School",
    address: "E-8, Islamabad",
    startDate: "2022-07-01",
    endDate: dates.distantFuture,
    industryPartner: "Global Business School",
    industryLogo: "https://ui-avatars.com/api/?name=Global+Business&background=8B5CF6&color=fff&size=256",
    universityLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Bahria_University_logo.png/220px-Bahria_University_logo.png"
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mou-database');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await MoU.deleteMany({});
    console.log('🗑️  Cleared existing MoUs');

    // Insert test data
    const result = await MoU.insertMany(testMous);
    console.log(`✅ Inserted ${result.length} test MoUs into database`);

    // Log statistics
    const activeCount = await MoU.countDocuments({ status: 'Active' });
    const draftCount = await MoU.countDocuments({ status: 'Draft' });
    const expiredCount = await MoU.countDocuments({ status: 'Expired' });
    
    console.log('\n📊 Database Statistics:');
    console.log(`   Active MoUs: ${activeCount}`);
    console.log(`   Draft MoUs: ${draftCount}`);
    console.log(`   Expired MoUs: ${expiredCount}`);
    console.log(`   Total MoUs: ${activeCount + draftCount + expiredCount}`);

    // Check for expiring soon MoUs (within 30 days)
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);
    
    const expiringSoon = await MoU.find({
      status: 'Active',
      endDate: {
        $gte: today.toISOString().split('T')[0],
        $lte: thirtyDaysFromNow.toISOString().split('T')[0]
      }
    });
    
    console.log(`\n🔔 MoUs Expiring Soon (within 30 days): ${expiringSoon.length}`);
    
    // List expiring MoUs
    if (expiringSoon.length > 0) {
      expiringSoon.forEach(mou => {
        console.log(`   - "${mou.title}" (${mou.university})`);
        console.log(`     Ends on: ${mou.endDate} | Status: ${mou.status}`);
      });
    } else {
      console.log(`   No MoUs expiring within 30 days`);
    }

    // Disconnect
    await mongoose.disconnect();
    console.log('\n🔌 Disconnected from MongoDB');
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();