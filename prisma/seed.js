// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// // seed mentor
// async function main() {
// 	// Create Mentors with Classes and Experiences and Sessions
// 	const users = [
// 		// Mentor Sekolah Dasar (SD), Kategori: Matematika
// 		{
// 			userType: 'Mentor',
// 			email: 'alice@example.com',
// 			name: 'Alice Johnson',
// 			skills: ['Mathematics', 'Physics', 'Chemistry'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/alice-johnson',
// 			portofolio: 'https://alicejohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/1.jpg',
// 			about: 'I am a passionate teacher who loves to teach mathematics to students.',
// 			experiences: [
// 				{
// 					jobTitle: 'Teacher',
// 					company: 'SDN 1 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Teacher',
// 					company: 'SDN 2 Jakarta',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Matematika',
// 					name: 'Matematika Dasar',
// 					description: 'Pelajaran matematika dasar untuk siswa sekolah dasar kelas 1-6.',
// 					terms: [
// 						'Peserta harus memiliki akses internet dan perangkat yang sesuai untuk mengakses materi online',
// 						'Peserta diharapkan aktif dalam partisipasi dan tugas-tugas yang diberikan',
// 					],
// 					price: 200000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'bob@example.com',
// 			name: 'Bob Smith',
// 			skills: ['Mathematics', 'Computer Science', 'Programming'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/bob-smith',
// 			portofolio: 'https://bobsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg',
// 			about:
// 				'Saya adalah seorang pengajar yang berdedikasi untuk membantu siswa memahami konsep matematika dengan cara yang menyenangkan.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru',
// 					company: 'SDN 3 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Tutor Matematika',
// 					company: 'Swasta',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Matematika',
// 					name: 'Matematika Lanjutan',
// 					description: 'Kursus matematika lanjutan untuk siswa SD kelas 4-6.',
// 					terms: [
// 						'Peserta harus memiliki dasar pengetahuan matematika yang kuat.',
// 						'Peserta diharapkan untuk berpartisipasi aktif dalam diskusi dan latihan.',
// 					],
// 					price: 250000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'charlie@example.com',
// 			name: 'Charlie Brown',
// 			skills: ['Mathematics', 'Statistics', 'Data Analysis'],
// 			gender: 'Pria',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/charlie-brown',
// 			portofolio: 'https://charliebrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
// 			about:
// 				'Saya adalah seorang pengajar matematika yang berpengalaman dengan minat dalam statistik dan analisis data.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru',
// 					company: 'SDN 4 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Instruktur Matematika',
// 					company: 'Institut Matematika Surabaya',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Matematika',
// 					name: 'Statistika Dasar untuk Anak',
// 					description: 'Kursus singkat tentang konsep dasar statistika untuk siswa SD.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan statistika sebelumnya.',
// 						'Peserta akan belajar menggunakan permainan dan studi kasus.',
// 					],
// 					price: 150000,
// 					// 30,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david@example.com',
// 			name: 'David Lee',
// 			skills: ['Mathematics', 'Economics', 'Finance'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/david-lee',
// 			portofolio: 'https://davidlee.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
// 			about:
// 				'Saya adalah seorang pengajar matematika yang juga memiliki minat dalam bidang ekonomi dan keuangan.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru',
// 					company: 'SDN 5 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Dosen Matematika',
// 					company: 'Universitas Gajah Mada',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Matematika',
// 					name: 'Matematika Keuangan untuk Anak',
// 					description:
// 						'Pelajaran tentang dasar-dasar matematika dalam konteks keuangan untuk siswa SD.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan keuangan sebelumnya.',
// 						'Peserta akan memahami konsep matematika melalui contoh keuangan sehari-hari.',
// 					],
// 					price: 180000,
// 					// 35,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Dasar (SD), Kategori: Bahasa
// 		{
// 			userType: 'Mentor',
// 			email: 'emma@example.com',
// 			name: 'Emma Wilson',
// 			skills: ['Bahasa Indonesia', 'Bahasa Inggris', 'Sastra'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/emma-wilson',
// 			portofolio: 'https://emmawilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/2.jpg',
// 			about:
// 				'Saya adalah seorang pengajar bahasa yang berpengalaman dengan minat dalam sastra dan komunikasi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa',
// 					company: 'SDN 6 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Instruktur Bahasa Inggris',
// 					company: 'English Academy',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Bahasa',
// 					name: 'Bahasa Inggris Dasar',
// 					description: 'Pelajaran bahasa Inggris dasar untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan bahasa Inggris sebelumnya.',
// 						'Peserta akan belajar dengan metode bermain dan lagu.',
// 					],
// 					price: 150000,
// 					// 30,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'adam@example.com',
// 			name: 'Adam Smith',
// 			skills: ['Bahasa Indonesia', 'Bahasa Jawa', 'Filsafat'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/adam-smith',
// 			portofolio: 'https://adamsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/4.jpg',
// 			about:
// 				'Saya adalah seorang pengajar bahasa dengan minat dalam bahasa Jawa dan filsafat Jawa.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa',
// 					company: 'SDN 7 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Dosen Bahasa Indonesia',
// 					company: 'Universitas Gajah Mada',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Bahasa',
// 					name: 'Bahasa Indonesia untuk Anak',
// 					description: 'Pelajaran bahasa Indonesia untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan bahasa Indonesia sebelumnya.',
// 						'Peserta akan belajar melalui cerita dan permainan.',
// 					],
// 					price: 120000,
// 					// 25,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'sara@example.com',
// 			name: 'Sara Lee',
// 			skills: ['Bahasa Inggris', 'Bahasa Mandarin', 'Budaya'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/sara-lee',
// 			portofolio: 'https://saralee.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/3.jpg',
// 			about:
// 				'Saya adalah seorang pengajar bahasa yang memiliki keahlian dalam bahasa Inggris dan Mandarin.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa Inggris',
// 					company: 'SDN 8 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Instruktur Bahasa Mandarin',
// 					company: 'Language Center',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Bahasa',
// 					name: 'Pengenalan Bahasa Mandarin',
// 					description: 'Pelajaran pengenalan bahasa Mandarin untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan bahasa Mandarin sebelumnya.',
// 						'Peserta akan belajar melalui lagu dan cerita-cerita sederhana.',
// 					],
// 					price: 180000,
// 					// 40,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'james@example.com',
// 			name: 'James Brown',
// 			skills: ['Bahasa Indonesia', 'Bahasa Sunda', 'Sejarah'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/james-brown',
// 			portofolio: 'https://jamesbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/5.jpg',
// 			about:
// 				'Saya adalah seorang pengajar bahasa yang memiliki minat dalam bahasa Sunda dan sejarah.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa Indonesia',
// 					company: 'SDN 9 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Dosen Bahasa Sunda',
// 					company: 'Universitas Padjajaran',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Bahasa',
// 					name: 'Pengenalan Bahasa Sunda',
// 					description: 'Pelajaran pengenalan bahasa Sunda untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan bahasa Sunda sebelumnya.',
// 						'Peserta akan belajar melalui dongeng dan permainan tradisional.',
// 					],
// 					price: 140000,
// 					// 35,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Dasar (SD), Kategori: Pengetahuan

// 		{
// 			userType: 'Mentor',
// 			email: 'john@example.com',
// 			name: 'John Doe',
// 			skills: ['Sejarah', 'Geografi', 'Budaya'],
// 			gender: 'Pria',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/john-doe',
// 			portofolio: 'https://johndoe.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/6.jpg',
// 			about: 'Saya adalah seorang pengajar dengan minat dalam sejarah, geografi, dan budaya.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Sejarah',
// 					company: 'SDN 10 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pemandu Wisata',
// 					company: 'Wisata Sejarah',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Pengetahuan',
// 					name: 'Sejarah Indonesia untuk Anak',
// 					description: 'Pelajaran tentang sejarah Indonesia untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan sejarah sebelumnya.',
// 						'Peserta akan belajar melalui cerita dan proyek-proyek kreatif.',
// 					],
// 					price: 160000,
// 					// 30,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'lisa@example.com',
// 			name: 'Lisa Brown',
// 			skills: ['Sains', 'Teknologi', 'Inovasi'],
// 			gender: 'Wanita',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/lisa-brown',
// 			portofolio: 'https://lisabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
// 			about: 'Saya adalah seorang pengajar dengan minat dalam sains, teknologi, dan inovasi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Sains',
// 					company: 'SDN 11 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti',
// 					company: 'Institut Sains Terapan',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Pengetahuan',
// 					name: 'Sains Dasar untuk Anak',
// 					description: 'Pelajaran sains dasar untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan sains sebelumnya.',
// 						'Peserta akan belajar melalui eksperimen dan observasi.',
// 					],
// 					price: 180000,
// 					// 35,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'eva@example.com',
// 			name: 'Eva Johnson',
// 			skills: ['Seni', 'Musik', 'Kreativitas'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/eva-johnson',
// 			portofolio: 'https://evajohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/5.jpg',
// 			about: 'Saya adalah seorang pengajar dengan minat dalam seni, musik, dan kreativitas.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Seni',
// 					company: 'SDN 12 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Seniman',
// 					company: 'Studi Seni Kreatif',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Pengetahuan',
// 					name: 'Seni Kreatif untuk Anak',
// 					description: 'Pelajaran seni kreatif untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan seni sebelumnya.',
// 						'Peserta akan belajar melalui eksplorasi dan ekspresi kreatif.',
// 					],
// 					price: 140000,
// 					// 30,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'michael@example.com',
// 			name: 'Michael Smith',
// 			skills: ['Pendidikan Moral', 'Etika', 'Kepemimpinan'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/michael-smith',
// 			portofolio: 'https://michaelsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/7.jpg',
// 			about:
// 				'Saya adalah seorang pengajar dengan minat dalam pendidikan moral, etika, dan kepemimpinan.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Pendidikan Moral',
// 					company: 'SDN 13 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Konselor Pendidikan',
// 					company: 'Lembaga Konseling Pendidikan',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Pengetahuan',
// 					name: 'Pendidikan Moral dan Kepemimpinan',
// 					description:
// 						'Pelajaran tentang pendidikan moral dan kepemimpinan untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan sebelumnya.',
// 						'Peserta akan belajar melalui cerita dan permainan peran.',
// 					],
// 					price: 160000,
// 					// 35,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Dasar (SD), Kategori: Teknologi
// 		{
// 			userType: 'Mentor',
// 			email: 'sarah@example.com',
// 			name: 'Sarah Johnson',
// 			skills: ['Pemrograman', 'Desain Web', 'Ilmu Komputer'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/sarah-johnson',
// 			portofolio: 'https://sarahjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/6.jpg',
// 			about:
// 				'Saya adalah seorang pengajar dengan minat dalam pemrograman, desain web, dan ilmu komputer.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Pemrograman',
// 					company: 'SDN 14 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Desainer Web Freelance',
// 					company: 'Freelance',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Teknologi',
// 					name: 'Pengenalan Pemrograman untuk Anak',
// 					description: 'Pelajaran pengenalan pemrograman untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan pemrograman sebelumnya.',
// 						'Peserta akan belajar melalui permainan dan proyek sederhana.',
// 					],
// 					price: 200000,
// 					// 40,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'daniel@example.com',
// 			name: 'Daniel Brown',
// 			skills: ['Jaringan Komputer', 'Sistem Operasi', 'Keamanan Informasi'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/daniel-brown',
// 			portofolio: 'https://danielbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/8.jpg',
// 			about:
// 				'Saya adalah seorang pengajar dengan minat dalam jaringan komputer, sistem operasi, dan keamanan informasi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Jaringan Komputer',
// 					company: 'SDN 15 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Administrator Sistem',
// 					company: 'Perusahaan Teknologi',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Teknologi',
// 					name: 'Dasar Jaringan Komputer',
// 					description: 'Pelajaran tentang dasar-dasar jaringan komputer untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan jaringan komputer sebelumnya.',
// 						'Peserta akan belajar melalui demonstrasi dan simulasi.',
// 					],
// 					price: 180000,
// 					// 35,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'kevin@example.com',
// 			name: 'Kevin Wilson',
// 			skills: ['Robotika', 'Pemrograman Mikrokontroler', 'Teknologi IoT'],
// 			gender: 'Pria',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/kevin-wilson',
// 			portofolio: 'https://kevinwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/9.jpg',
// 			about:
// 				'Saya adalah seorang pengajar dengan minat dalam robotika, pemrograman mikrokontroler, dan teknologi IoT.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Robotika',
// 					company: 'SDN 16 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pengembang Perangkat IoT',
// 					company: 'Perusahaan Teknologi',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Teknologi',
// 					name: 'Pengenalan Robotika untuk Anak',
// 					description: 'Pelajaran pengenalan robotika untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan robotika sebelumnya.',
// 						'Peserta akan belajar melalui proyek-proyek sederhana dan eksperimen.',
// 					],
// 					price: 220000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'alex@example.com',
// 			name: 'Alex Smith',
// 			skills: ['Desain Grafis', 'Pengembangan Aplikasi Mobile', 'UI/UX Design'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/alex-smith',
// 			portofolio: 'https://alexsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/10.jpg',
// 			about:
// 				'Saya adalah seorang pengajar dengan minat dalam desain grafis, pengembangan aplikasi mobile, dan UI/UX design.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Desain Grafis',
// 					company: 'SDN 17 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pengembang Aplikasi Mobile',
// 					company: 'Perusahaan Perangkat Lunak',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SD',
// 					category: 'Teknologi',
// 					name: 'Pengenalan Desain Grafis untuk Anak',
// 					description: 'Pelajaran pengenalan desain grafis untuk siswa sekolah dasar.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan desain grafis sebelumnya.',
// 						'Peserta akan belajar melalui latihan dan proyek-proyek kreatif.',
// 					],
// 					price: 200000,
// 					// 40,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		//  SMP :
// 		//   Matematika
// 		//   Bahasa
// 		//   Teknologi
// 		// Biologi
// 		//   Ekonomi
// 		//   Fisika
// 		//   Geografi
// 		//   Kimia
// 		// Mentor Sekolah Menengah Pertama (SMP), Kategori: Matematika
// 		{
// 			userType: 'Mentor',
// 			email: 'jane_doe@example.com',
// 			name: 'Jane Doe',
// 			skills: ['Matematika', 'Fisika', 'Kimia'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/jane-doe',
// 			portofolio: 'https://janedoe.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
// 			about:
// 				'Saya adalah seorang pengajar matematika yang berpengalaman dengan minat dalam fisika dan kimia.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Matematika',
// 					company: 'SMP 1 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Guru Fisika',
// 					company: 'SMP 1 Jakarta',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Matematika',
// 					name: 'Matematika SMP',
// 					description: 'Pelajaran matematika untuk siswa sekolah menengah pertama.',
// 					terms: [
// 						'Peserta harus memiliki dasar matematika yang kuat.',
// 						'Materi akan disajikan melalui kuliah dan latihan soal.',
// 					],
// 					price: 250000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'john_smith@example.com',
// 			name: 'John Smith',
// 			skills: ['Matematika', 'Ekonomi', 'Statistika'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/john-smith',
// 			portofolio: 'https://johnsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/11.jpg',
// 			about: 'Saya adalah seorang pengajar matematika dengan minat dalam ekonomi dan statistika.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Matematika',
// 					company: 'SMP 2 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Dosen Ekonomi',
// 					company: 'Universitas Padjadjaran',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Matematika',
// 					name: 'Matematika Dasar SMP',
// 					description: 'Pelajaran dasar matematika untuk siswa sekolah menengah pertama.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan matematika sebelumnya.',
// 						'Peserta akan belajar melalui penerapan dalam kehidupan sehari-hari.',
// 					],
// 					price: 200000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emma_wilson@example.com',
// 			name: 'Emma Wilson',
// 			skills: ['Matematika', 'Bahasa Inggris', 'Bimbingan'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/emma-wilson',
// 			portofolio: 'https://emmawilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/8.jpg',
// 			about:
// 				'Saya adalah seorang pengajar matematika yang juga memberikan bimbingan belajar bagi siswa.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Matematika',
// 					company: 'SMP 3 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Bimbingan Belajar',
// 					company: 'Privat',
// 					isCurrentJob: true,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Matematika',
// 					name: 'Pemahaman Konsep Matematika SMP',
// 					description:
// 						'Pelajaran untuk memahami konsep matematika dasar dan menengah untuk siswa SMP.',
// 					terms: [
// 						'Peserta akan dibimbing untuk memahami konsep secara mendalam.',
// 						'Latihan soal dan diskusi akan dilakukan secara intensif.',
// 					],
// 					price: 300000,
// 					// 90,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_jones@example.com',
// 			name: 'David Jones',
// 			skills: ['Matematika', 'Fisika', 'Robotika'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/david-jones',
// 			portofolio: 'https://davidjones.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/12.jpg',
// 			about: 'Saya adalah seorang pengajar matematika dengan minat dalam fisika dan robotika.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Matematika',
// 					company: 'SMP 4 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Instruktur Robotika',
// 					company: 'Klub Robotika',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Matematika',
// 					name: 'Matematika Lanjutan SMP',
// 					description: 'Pelajaran matematika lanjutan untuk siswa sekolah menengah pertama.',
// 					terms: [
// 						'Peserta harus memiliki pengetahuan matematika dasar yang kuat.',
// 						'Materi akan disajikan melalui teori dan aplikasi praktis.',
// 					],
// 					price: 280000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Pertama (SMP), Kategori: Bahasa
// 		{
// 			userType: 'Mentor',
// 			email: 'linda_smp@example.com',
// 			name: 'Linda Smith',
// 			skills: ['Bahasa Indonesia', 'Bahasa Inggris', 'Sastra'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/linda-smith',
// 			portofolio: 'https://lindasmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/9.jpg',
// 			about:
// 				'Saya adalah seorang pengajar bahasa dengan minat dalam bahasa Indonesia dan bahasa Inggris.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa Indonesia',
// 					company: 'SMP 5 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Guru Bahasa Inggris',
// 					company: 'SMP 5 Jakarta',
// 					isCurrentJob: true,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Bahasa',
// 					name: 'Pengenalan Bahasa Inggris dan Bahasa Indonesia',
// 					description: 'Pelajaran pengenalan bahasa Inggris dan bahasa Indonesia untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan bahasa sebelumnya.',
// 						'Peserta akan belajar melalui praktik berbicara dan penulisan.',
// 					],
// 					price: 220000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'mark_smp@example.com',
// 			name: 'Mark Johnson',
// 			skills: ['Bahasa Inggris', 'Bahasa Spanyol', 'Budaya'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/mark-johnson',
// 			portofolio: 'https://markjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/13.jpg',
// 			about:
// 				'Saya adalah seorang pengajar bahasa dengan minat dalam bahasa Inggris dan bahasa Spanyol.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa Inggris',
// 					company: 'SMP 6 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Guru Bahasa Spanyol',
// 					company: 'SMP 6 Bandung',
// 					isCurrentJob: true,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Bahasa',
// 					name: 'Bahasa Inggris dan Bahasa Spanyol untuk Remaja',
// 					description: 'Pelajaran bahasa Inggris dan bahasa Spanyol untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan bahasa sebelumnya.',
// 						'Peserta akan belajar melalui permainan peran dan diskusi kelompok.',
// 					],
// 					price: 230000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'alice_smp@example.com',
// 			name: 'Alice Wilson',
// 			skills: ['Bahasa Indonesia', 'Bahasa Jawa', 'Sastra'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/alice-wilson',
// 			portofolio: 'https://alicewilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/10.jpg',
// 			about:
// 				'Saya adalah seorang pengajar bahasa dengan minat dalam bahasa Indonesia dan bahasa Jawa.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa Indonesia',
// 					company: 'SMP 7 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Guru Bahasa Jawa',
// 					company: 'SMP 7 Surabaya',
// 					isCurrentJob: true,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Bahasa',
// 					name: 'Pengenalan Bahasa Indonesia dan Bahasa Jawa',
// 					description: 'Pelajaran pengenalan bahasa Indonesia dan bahasa Jawa untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan bahasa sebelumnya.',
// 						'Peserta akan belajar melalui cerita-cerita lokal dan permainan tradisional.',
// 					],
// 					price: 210000,
// 					// 40,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'michael_smp@example.com',
// 			name: 'Michael Brown',
// 			skills: ['Bahasa Inggris', 'Bahasa Mandarin', 'Budaya'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/michael-brown',
// 			portofolio: 'https://michaelbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/14.jpg',
// 			about:
// 				'Saya adalah seorang pengajar bahasa dengan minat dalam bahasa Inggris dan bahasa Mandarin.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa Inggris',
// 					company: 'SMP 8 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Guru Bahasa Mandarin',
// 					company: 'SMP 8 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Bahasa',
// 					name: 'Bahasa Inggris dan Bahasa Mandarin untuk Remaja',
// 					description: 'Pelajaran bahasa Inggris dan bahasa Mandarin untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan bahasa sebelumnya.',
// 						'Peserta akan belajar melalui simulasi situasi nyata dan diskusi interaktif.',
// 					],
// 					price: 240000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Pertama (SMP), Kategori: Teknologi
// 		{
// 			userType: 'Mentor',
// 			email: 'adamwilson@example.com',
// 			name: 'Adam Wilson',
// 			skills: ['Pemrograman', 'Desain Web', 'Pengembangan Aplikasi'],
// 			gender: 'Pria',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/adam-wilson',
// 			portofolio: 'https://adamwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/15.jpg',
// 			about:
// 				'Saya adalah seorang pengajar teknologi dengan minat dalam pemrograman, desain web, dan pengembangan aplikasi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Pemrograman',
// 					company: 'SMP 9 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pengembang Aplikasi',
// 					company: 'Perusahaan Teknologi',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Teknologi',
// 					name: 'Dasar Pemrograman untuk Remaja',
// 					description: 'Pelajaran dasar pemrograman untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan pemrograman sebelumnya.',
// 						'Peserta akan belajar melalui latihan dan proyek-proyek kecil.',
// 					],
// 					price: 220000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'sophia@example.com',
// 			name: 'Sophia Johnson',
// 			skills: ['Jaringan Komputer', 'Keamanan Informasi', 'Sistem Operasi'],
// 			gender: 'Wanita',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/sophia-johnson',
// 			portofolio: 'https://sophiajohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/11.jpg',
// 			about:
// 				'Saya adalah seorang pengajar teknologi dengan minat dalam jaringan komputer, keamanan informasi, dan sistem operasi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Jaringan Komputer',
// 					company: 'SMP 10 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pengembang Keamanan Informasi',
// 					company: 'Perusahaan Teknologi',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Teknologi',
// 					name: 'Dasar Jaringan Komputer untuk Remaja',
// 					description: 'Pelajaran dasar jaringan komputer untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan jaringan komputer sebelumnya.',
// 						'Peserta akan belajar melalui simulasi dan studi kasus.',
// 					],
// 					price: 240000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'olivia@example.com',
// 			name: 'Olivia Brown',
// 			skills: ['Robotika', 'Pemrograman Mikrokontroler', 'IoT'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/olivia-brown',
// 			portofolio: 'https://oliviabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/12.jpg',
// 			about:
// 				'Saya adalah seorang pengajar teknologi dengan minat dalam robotika, pemrograman mikrokontroler, dan IoT.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Robotika',
// 					company: 'SMP 11 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pengembang IoT',
// 					company: 'Perusahaan Teknologi',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Teknologi',
// 					name: 'Pengenalan Robotika untuk Remaja',
// 					description: 'Pelajaran pengenalan robotika untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan robotika sebelumnya.',
// 						'Peserta akan belajar melalui proyek-proyek sederhana dan eksperimen.',
// 					],
// 					price: 230000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'liam@example.com',
// 			name: 'Liam Wilson',
// 			skills: ['Desain Grafis', 'UI/UX Design', 'Pengembangan Aplikasi Mobile'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/liam-wilson',
// 			portofolio: 'https://liamwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/16.jpg',
// 			about:
// 				'Saya adalah seorang pengajar teknologi dengan minat dalam desain grafis, UI/UX design, dan pengembangan aplikasi mobile.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Desain Grafis',
// 					company: 'SMP 12 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pengembang Aplikasi Mobile',
// 					company: 'Perusahaan Perangkat Lunak',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Teknologi',
// 					name: 'Dasar Desain Grafis untuk Remaja',
// 					description: 'Pelajaran dasar desain grafis untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan desain grafis sebelumnya.',
// 						'Peserta akan belajar melalui latihan dan proyek-proyek kreatif.',
// 					],
// 					price: 220000,
// 					// 40,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Pertama (SMP), Kategori: Biologi
// 		{
// 			userType: 'Mentor',
// 			email: 'sarah_bio@example.com',
// 			name: 'Sarah Johnson',
// 			skills: ['Biologi', 'Anatomi', 'Ekologi'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/sarah-johnson',
// 			portofolio: 'https://sarahjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/13.jpg',
// 			about: 'Saya adalah seorang pengajar biologi dengan minat dalam anatomi dan ekologi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Biologi',
// 					company: 'SMP 13 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Ekologi',
// 					company: 'Universitas Indonesia',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Biologi',
// 					name: 'Pengenalan Biologi SMP',
// 					description: 'Pelajaran pengenalan biologi untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan biologi sebelumnya.',
// 						'Peserta akan belajar melalui eksperimen dan observasi alam.',
// 					],
// 					price: 220000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_bio@example.com',
// 			name: 'David Smith',
// 			skills: ['Biologi', 'Genetika', 'Mikrobiologi'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/david-smith',
// 			portofolio: 'https://davidsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/17.jpg',
// 			about: 'Saya adalah seorang pengajar biologi dengan minat dalam genetika dan mikrobiologi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Biologi',
// 					company: 'SMP 14 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Asisten Peneliti Mikrobiologi',
// 					company: 'Institut Teknologi Bandung',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Biologi',
// 					name: 'Biologi Dasar SMP',
// 					description: 'Pelajaran biologi dasar untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan biologi sebelumnya.',
// 						'Peserta akan belajar melalui demonstrasi dan diskusi.',
// 					],
// 					price: 200000,
// 					// 40,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'olivia_bio@example.com',
// 			name: 'Olivia Wilson',
// 			skills: ['Biologi', 'Botani', 'Zoologi'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/olivia-wilson',
// 			portofolio: 'https://oliviawilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/14.jpg',
// 			about: 'Saya adalah seorang pengajar biologi dengan minat dalam botani dan zoologi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Biologi',
// 					company: 'SMP 15 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Kurator Museum',
// 					company: 'Museum Zoologi Surabaya',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Biologi',
// 					name: 'Pengenalan Keanekaragaman Hayati SMP',
// 					description: 'Pelajaran pengenalan keanekaragaman hayati untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan biologi sebelumnya.',
// 						'Peserta akan belajar melalui studi kasus dan kunjungan lapangan.',
// 					],
// 					price: 240000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'james_bio@example.com',
// 			name: 'James Brown',
// 			skills: ['Biologi', 'Biokimia', 'Fisiologi'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/james-brown',
// 			portofolio: 'https://jamesbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/18.jpg',
// 			about: 'Saya adalah seorang pengajar biologi dengan minat dalam biokimia dan fisiologi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Biologi',
// 					company: 'SMP 16 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Asisten Peneliti Biokimia',
// 					company: 'Universitas Gadjah Mada',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Biologi',
// 					name: 'Biokimia Dasar untuk Remaja',
// 					description: 'Pelajaran biokimia dasar untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan biokimia sebelumnya.',
// 						'Peserta akan belajar melalui eksperimen laboratorium dan penelitian.',
// 					],
// 					price: 230000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Pertama (SMP), Kategori: Ekonomi
// 		{
// 			userType: 'Mentor',
// 			email: 'emma_econ@example.com',
// 			name: 'Emma Johnson',
// 			skills: ['Ekonomi', 'Akuntansi', 'Manajemen Keuangan'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/emma-johnson',
// 			portofolio: 'https://emmajohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/15.jpg',
// 			about:
// 				'Saya adalah seorang pengajar ekonomi dengan minat dalam akuntansi dan manajemen keuangan.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Ekonomi',
// 					company: 'SMP 17 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Konsultan Keuangan',
// 					company: 'Perusahaan Konsultan',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Ekonomi',
// 					name: 'Dasar-dasar Ekonomi untuk Remaja',
// 					description: 'Pelajaran dasar-dasar ekonomi untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan ekonomi sebelumnya.',
// 						'Peserta akan belajar melalui studi kasus dan simulasi bisnis.',
// 					],
// 					price: 220000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'daniel_econ@example.com',
// 			name: 'Daniel Smith',
// 			skills: ['Ekonomi', 'Perdagangan Internasional', 'Kebijakan Moneter'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/daniel-smith',
// 			portofolio: 'https://danielsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/19.jpg',
// 			about:
// 				'Saya adalah seorang pengajar ekonomi dengan minat dalam perdagangan internasional dan kebijakan moneter.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Ekonomi',
// 					company: 'SMP 18 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Analisis Kebijakan Moneter',
// 					company: 'Bank Indonesia',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Ekonomi',
// 					name: 'Perdagangan Internasional untuk Remaja',
// 					description: 'Pelajaran perdagangan internasional untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan ekonomi sebelumnya.',
// 						'Peserta akan belajar melalui studi kasus global dan simulasi perdagangan.',
// 					],
// 					price: 230000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'olivia_econ@example.com',
// 			name: 'Olivia Wilson',
// 			skills: ['Ekonomi', 'Manajemen Bisnis', 'Pemasaran'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/olivia-wilson',
// 			portofolio: 'https://oliviawilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/16.jpg',
// 			about:
// 				'Saya adalah seorang pengajar ekonomi dengan minat dalam manajemen bisnis dan pemasaran.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Ekonomi',
// 					company: 'SMP 19 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Manajer Pemasaran',
// 					company: 'Perusahaan Retail',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Ekonomi',
// 					name: 'Manajemen Bisnis untuk Remaja',
// 					description: 'Pelajaran manajemen bisnis untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan ekonomi sebelumnya.',
// 						'Peserta akan belajar melalui permainan simulasi bisnis dan studi kasus.',
// 					],
// 					price: 240000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'liam_econ@example.com',
// 			name: 'Liam Brown',
// 			skills: ['Ekonomi', 'Investasi', 'Manajemen Keuangan'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/liam-brown',
// 			portofolio: 'https://liambrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
// 			about:
// 				'Saya adalah seorang pengajar ekonomi dengan minat dalam investasi dan manajemen keuangan.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Ekonomi',
// 					company: 'SMP 20 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Manajer Investasi',
// 					company: 'Perusahaan Keuangan',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Ekonomi',
// 					name: 'Investasi dan Manajemen Keuangan untuk Remaja',
// 					description: 'Pelajaran investasi dan manajemen keuangan untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan ekonomi sebelumnya.',
// 						'Peserta akan belajar melalui simulasi investasi dan analisis keuangan.',
// 					],
// 					price: 250000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Pertama (SMP), Kategori: Fisika
// 		{
// 			userType: 'Mentor',
// 			email: 'jason@example.com',
// 			name: 'Jason Wilson',
// 			skills: ['Fisika', 'Mekanika', 'Termodinamika'],
// 			gender: 'Pria',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/jason-wilson',
// 			portofolio: 'https://jasonwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
// 			about: 'Saya adalah seorang pengajar fisika dengan minat dalam mekanika dan termodinamika.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Fisika',
// 					company: 'SMP 21 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Mekanika',
// 					company: 'Institut Teknologi Bandung',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Fisika',
// 					name: 'Dasar-dasar Fisika SMP',
// 					description: 'Pelajaran dasar-dasar fisika untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan fisika sebelumnya.',
// 						'Peserta akan belajar melalui eksperimen dan demonstrasi.',
// 					],
// 					price: 220000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'sophie@example.com',
// 			name: 'Sophie Johnson',
// 			skills: ['Fisika', 'Elektromagnetisme', 'Optika'],
// 			gender: 'Wanita',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/sophie-johnson',
// 			portofolio: 'https://sophiejohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/17.jpg',
// 			about: 'Saya adalah seorang pengajar fisika dengan minat dalam elektromagnetisme dan optika.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Fisika',
// 					company: 'SMP 22 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Optika',
// 					company: 'Institut Teknologi Bandung',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Fisika',
// 					name: 'Pengenalan Fisika Modern untuk Remaja',
// 					description: 'Pelajaran pengenalan fisika modern untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan fisika sebelumnya.',
// 						'Peserta akan belajar melalui eksperimen laboratorium dan diskusi konseptual.',
// 					],
// 					price: 230000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'oliver@example.com',
// 			name: 'Oliver Brown',
// 			skills: ['Fisika', 'Kinetika Gas', 'Fisika Nuklir'],
// 			gender: 'Pria',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/oliver-brown',
// 			portofolio: 'https://oliverbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/22.jpg',
// 			about:
// 				'Saya adalah seorang pengajar fisika dengan minat dalam kinetika gas dan fisika nuklir.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Fisika',
// 					company: 'SMP 23 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Fisika Nuklir',
// 					company: 'Badan Tenaga Nuklir Nasional',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Fisika',
// 					name: 'Fisika Modern untuk Remaja',
// 					description: 'Pelajaran fisika modern untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan fisika sebelumnya.',
// 						'Peserta akan belajar melalui eksperimen simulasi dan pemecahan masalah.',
// 					],
// 					price: 240000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'lily@example.com',
// 			name: 'Lily Wilson',
// 			skills: ['Fisika', 'Fluida Dinamis', 'Fisika Partikel'],
// 			gender: 'Wanita',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/lily-wilson',
// 			portofolio: 'https://lilywilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/18.jpg',
// 			about:
// 				'Saya adalah seorang pengajar fisika dengan minat dalam fluida dinamis dan fisika partikel.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Fisika',
// 					company: 'SMP 24 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Asisten Peneliti Fisika Partikel',
// 					company: 'Institut Teknologi Sepuluh Nopember',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Fisika',
// 					name: 'Fisika Modern: Dinamika Fluida dan Partikel',
// 					description:
// 						'Pelajaran fisika modern tentang dinamika fluida dan partikel untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan fisika sebelumnya.',
// 						'Peserta akan belajar melalui simulasi komputer dan eksperimen praktis.',
// 					],
// 					price: 250000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Pertama (SMP), Kategori: Geografi
// 		{
// 			userType: 'Mentor',
// 			email: 'rachel_geog@example.com',
// 			name: 'Rachel Johnson',
// 			skills: ['Geografi', 'Klimatologi', 'Penginderaan Jauh'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/rachel-johnson',
// 			portofolio: 'https://racheljohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/19.jpg',
// 			about:
// 				'Saya adalah seorang pengajar geografi dengan minat dalam klimatologi dan penginderaan jauh.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Geografi',
// 					company: 'SMP 25 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Klimatologi',
// 					company: 'Badan Meteorologi, Klimatologi, dan Geofisika',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Geografi',
// 					name: 'Pengenalan Geografi SMP',
// 					description: 'Pelajaran pengenalan geografi untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan geografi sebelumnya.',
// 						'Peserta akan belajar melalui studi kasus dan pemetaan digital.',
// 					],
// 					price: 220000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'michael_geog@example.com',
// 			name: 'Michael Smith',
// 			skills: ['Geografi', 'Geomorfologi', 'Penginderaan Jauh'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/michael-smith',
// 			portofolio: 'https://michaelsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/23.jpg',
// 			about:
// 				'Saya adalah seorang pengajar geografi dengan minat dalam geomorfologi dan penginderaan jauh.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Geografi',
// 					company: 'SMP 26 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Asisten Peneliti Geomorfologi',
// 					company: 'Institut Teknologi Bandung',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Geografi',
// 					name: 'Geografi Fisik SMP',
// 					description: 'Pelajaran geografi fisik untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan geografi sebelumnya.',
// 						'Peserta akan belajar melalui eksperimen lapangan dan analisis data satelit.',
// 					],
// 					price: 230000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'olivia_geog@example.com',
// 			name: 'Olivia Wilson',
// 			skills: ['Geografi', 'Kartografi', 'Penginderaan Jauh'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/olivia-wilson',
// 			portofolio: 'https://oliviawilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/20.jpg',
// 			about:
// 				'Saya adalah seorang pengajar geografi dengan minat dalam kartografi dan penginderaan jauh.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Geografi',
// 					company: 'SMP 27 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Kartografer',
// 					company: 'Badan Informasi Geospasial',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Geografi',
// 					name: 'Penginderaan Jauh untuk Remaja',
// 					description: 'Pelajaran pengenalan penginderaan jauh untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan geografi sebelumnya.',
// 						'Peserta akan belajar melalui analisis citra satelit dan pembuatan peta digital.',
// 					],
// 					price: 240000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'liam_geog@example.com',
// 			name: 'Liam Brown',
// 			skills: ['Geografi', 'Hidrologi', 'Perubahan Iklim'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/liam-brown',
// 			portofolio: 'https://liambrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/24.jpg',
// 			about:
// 				'Saya adalah seorang pengajar geografi dengan minat dalam hidrologi dan perubahan iklim.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Geografi',
// 					company: 'SMP 28 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Hidrologi',
// 					company: 'Badan Meteorologi, Klimatologi, dan Geofisika',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Geografi',
// 					name: 'Hidrologi dan Perubahan Iklim untuk Remaja',
// 					description: 'Pelajaran hidrologi dan perubahan iklim untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan geografi sebelumnya.',
// 						'Peserta akan belajar melalui studi kasus dan simulasi model iklim.',
// 					],
// 					price: 250000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Pertama (SMP), Kategori: Kimia
// 		{
// 			userType: 'Mentor',
// 			email: 'emma_chem@example.com',
// 			name: 'Emma Johnson',
// 			skills: ['Kimia', 'Kimia Organik', 'Kimia Anorganik'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/emma-johnson',
// 			portofolio: 'https://emmajohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
// 			about:
// 				'Saya adalah seorang pengajar kimia dengan minat dalam kimia organik dan kimia anorganik.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Kimia',
// 					company: 'SMP 29 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Asisten Peneliti Kimia Organik',
// 					company: 'Institut Teknologi Bandung',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Kimia',
// 					name: 'Kimia Dasar SMP',
// 					description: 'Pelajaran kimia dasar untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan kimia sebelumnya.',
// 						'Peserta akan belajar melalui eksperimen laboratorium dan diskusi konseptual.',
// 					],
// 					price: 220000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_chem@example.com',
// 			name: 'David Smith',
// 			skills: ['Kimia', 'Kimia Fisik', 'Kimia Anorganik'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/david-smith',
// 			portofolio: 'https://davidsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/25.jpg',
// 			about:
// 				'Saya adalah seorang pengajar kimia dengan minat dalam kimia fisik dan kimia anorganik.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Kimia',
// 					company: 'SMP 30 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Kimia Fisik',
// 					company: 'Institut Teknologi Bandung',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Kimia',
// 					name: 'Kimia Fisik SMP',
// 					description: 'Pelajaran kimia fisik untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan kimia sebelumnya.',
// 						'Peserta akan belajar melalui eksperimen laboratorium dan pemecahan masalah.',
// 					],
// 					price: 230000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'olivia_chem@example.com',
// 			name: 'Olivia Wilson',
// 			skills: ['Kimia', 'Kimia Analitik', 'Kimia Fisik'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/olivia-wilson',
// 			portofolio: 'https://oliviawilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/22.jpg',
// 			about:
// 				'Saya adalah seorang pengajar kimia dengan minat dalam kimia analitik dan kimia fisik.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Kimia',
// 					company: 'SMP 31 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Analisis Kimia',
// 					company: 'Laboratorium Kimia',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Kimia',
// 					name: 'Kimia Analitik SMP',
// 					description: 'Pelajaran kimia analitik untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan kimia sebelumnya.',
// 						'Peserta akan belajar melalui eksperimen laboratorium dan analisis data.',
// 					],
// 					price: 240000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'liam_chem@example.com',
// 			name: 'Liam Brown',
// 			skills: ['Kimia', 'Kimia Organik', 'Kimia Fisik'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/liam-brown',
// 			portofolio: 'https://liambrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/26.jpg',
// 			about: 'Saya adalah seorang pengajar kimia dengan minat dalam kimia organik dan kimia fisik.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Kimia',
// 					company: 'SMP 32 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Asisten Peneliti Kimia Fisik',
// 					company: 'Universitas Gadjah Mada',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMP',
// 					category: 'Kimia',
// 					name: 'Kimia Organik SMP',
// 					description: 'Pelajaran kimia organik untuk siswa SMP.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan kimia sebelumnya.',
// 						'Peserta akan belajar melalui eksperimen laboratorium dan diskusi konseptual.',
// 					],
// 					price: 250000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// 		 SMA :
// 		//   Matematika
// 		//   Bahasa
// 		//   Teknologi
// 		// Biologi
// 		//   Ekonomi
// 		//   Fisika
// 		//   Geografi
// 		//   Kimia

// 		// Mentor Sekolah Menengah Atas (SMA), Kategori: Matematika
// 		{
// 			userType: 'Mentor',
// 			email: 'john_math@example.com',
// 			name: 'John Smith',
// 			skills: ['Matematika', 'Aljabar', 'Kalkulus'],
// 			gender: 'Pria',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/john-smith',
// 			portofolio: 'https://johnsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/27.jpg',
// 			about: 'Saya adalah seorang pengajar matematika dengan minat dalam aljabar dan kalkulus.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Matematika',
// 					company: 'SMA 1 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Asisten Peneliti Matematika',
// 					company: 'Universitas Indonesia',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Matematika',
// 					name: 'Matematika Lanjutan SMA',
// 					description: 'Pelajaran matematika lanjutan untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar matematika.',
// 						'Peserta akan belajar melalui pembahasan soal-soal tingkat lanjutan dan penerapan dalam situasi nyata.',
// 					],
// 					price: 300000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emma_math@example.com',
// 			name: 'Emma Johnson',
// 			skills: ['Matematika', 'Geometri', 'Trigonometri'],
// 			gender: 'Wanita',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/emma-johnson',
// 			portofolio: 'https://emmajohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/23.jpg',
// 			about:
// 				'Saya adalah seorang pengajar matematika dengan minat dalam geometri dan trigonometri.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Matematika',
// 					company: 'SMA 2 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pengajar Les Privat',
// 					company: 'PT Tutoring',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Matematika',
// 					name: 'Geometri dan Trigonometri SMA',
// 					description: 'Pelajaran geometri dan trigonometri untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar matematika.',
// 						'Peserta akan belajar melalui pembahasan konsep, rumus, dan aplikasi dalam permasalahan geometri dan trigonometri.',
// 					],
// 					price: 280000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'michael_math@example.com',
// 			name: 'Michael Wilson',
// 			skills: ['Matematika', 'Statistika', 'Probabilitas'],
// 			gender: 'Pria',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/michael-wilson',
// 			portofolio: 'https://michaelwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/28.jpg',
// 			about:
// 				'Saya adalah seorang pengajar matematika dengan minat dalam statistika dan probabilitas.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Matematika',
// 					company: 'SMA 3 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Analisis Data',
// 					company: 'Perusahaan Konsultan Statistik',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Matematika',
// 					name: 'Statistika dan Probabilitas SMA',
// 					description: 'Pelajaran statistika dan probabilitas untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar matematika.',
// 						'Peserta akan belajar melalui pembahasan konsep statistika dan probabilitas serta aplikasinya dalam berbagai bidang.',
// 					],
// 					price: 320000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'olivia_math@example.com',
// 			name: 'Olivia Brown',
// 			skills: ['Matematika', 'Kalkulus', 'Aljabar Linear'],
// 			gender: 'Wanita',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/olivia-brown',
// 			portofolio: 'https://oliviabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/24.jpg',
// 			about:
// 				'Saya adalah seorang pengajar matematika dengan minat dalam kalkulus dan aljabar linear.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Matematika',
// 					company: 'SMA 4 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pengajar Les Privat',
// 					company: 'PT Genius Education',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Matematika',
// 					name: 'Kalkulus dan Aljabar Linear SMA',
// 					description: 'Pelajaran kalkulus dan aljabar linear untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar matematika.',
// 						'Peserta akan belajar melalui pembahasan konsep, teorema, dan penerapannya dalam permasalahan kalkulus dan aljabar linear.',
// 					],
// 					price: 310000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Atas (SMA), Kategori: Bahasa
// 		{
// 			userType: 'Mentor',
// 			email: 'sarah_lang@example.com',
// 			name: 'Sarah Johnson',
// 			skills: ['Bahasa', 'Bahasa Inggris', 'Sastra'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/sarah-johnson',
// 			portofolio: 'https://sarahjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/25.jpg',
// 			about: 'Saya adalah seorang pengajar bahasa dengan minat dalam bahasa Inggris dan sastra.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa',
// 					company: 'SMA 1 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Penerjemah',
// 					company: 'Freelance',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Bahasa',
// 					name: 'Bahasa Inggris SMA',
// 					description: 'Pelajaran bahasa Inggris untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar bahasa Inggris.',
// 						'Peserta akan belajar melalui berbagai aktivitas, latihan, dan diskusi untuk meningkatkan kemampuan bahasa Inggris mereka.',
// 					],
// 					price: 250000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'daniel_lang@example.com',
// 			name: 'Daniel Wilson',
// 			skills: ['Bahasa', 'Bahasa Spanyol', 'Bahasa Prancis'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/daniel-wilson',
// 			portofolio: 'https://danielwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/29.jpg',
// 			about: 'Saya adalah seorang pengajar bahasa dengan minat dalam bahasa Spanyol dan Prancis.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa',
// 					company: 'SMA 2 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Penerjemah',
// 					company: 'Perusahaan Penerbit Buku',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Bahasa',
// 					name: 'Bahasa Spanyol SMA',
// 					description: 'Pelajaran bahasa Spanyol untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar bahasa Spanyol.',
// 						'Peserta akan belajar melalui berbagai aktivitas, latihan, dan diskusi untuk meningkatkan kemampuan bahasa Spanyol mereka.',
// 					],
// 					price: 260000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'olivia_lang@example.com',
// 			name: 'Olivia Brown',
// 			skills: ['Bahasa', 'Bahasa Jerman', 'Bahasa Italia'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/olivia-brown',
// 			portofolio: 'https://oliviabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/26.jpg',
// 			about: 'Saya adalah seorang pengajar bahasa dengan minat dalam bahasa Jerman dan Italia.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa',
// 					company: 'SMA 3 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Penerjemah',
// 					company: 'Kantor Penerjemahan',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Bahasa',
// 					name: 'Bahasa Jerman SMA',
// 					description: 'Pelajaran bahasa Jerman untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar bahasa Jerman.',
// 						'Peserta akan belajar melalui berbagai aktivitas, latihan, dan diskusi untuk meningkatkan kemampuan bahasa Jerman mereka.',
// 					],
// 					price: 270000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'liam_lang@example.com',
// 			name: 'Liam Smith',
// 			skills: ['Bahasa', 'Bahasa Mandarin', 'Bahasa Korea'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/liam-smith',
// 			portofolio: 'https://liamsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/30.jpg',
// 			about: 'Saya adalah seorang pengajar bahasa dengan minat dalam bahasa Mandarin dan Korea.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Bahasa',
// 					company: 'SMA 4 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Penerjemah',
// 					company: 'Perusahaan Multinasional',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Bahasa',
// 					name: 'Bahasa Mandarin SMA',
// 					description: 'Pelajaran bahasa Mandarin untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar bahasa Mandarin.',
// 						'Peserta akan belajar melalui berbagai aktivitas, latihan, dan diskusi untuk meningkatkan kemampuan bahasa Mandarin mereka.',
// 					],
// 					price: 280000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Atas (SMA), Kategori: Teknologi
// 		{
// 			userType: 'Mentor',
// 			email: 'adam_tech@example.com',
// 			name: 'Adam Wilson',
// 			skills: ['Teknologi', 'Pemrograman', 'Desain UX/UI'],
// 			gender: 'Pria',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/adam-wilson',
// 			portofolio: 'https://adamwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/31.jpg',
// 			about:
// 				'Saya adalah seorang pengajar teknologi dengan minat dalam pemrograman dan desain UX/UI.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Teknologi',
// 					company: 'SMA 1 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pengembang Perangkat Lunak',
// 					company: 'Perusahaan Teknologi',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Teknologi',
// 					name: 'Pemrograman Dasar SMA',
// 					description: 'Pelajaran pemrograman dasar untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan pemrograman sebelumnya.',
// 						'Peserta akan belajar konsep dasar pemrograman dan membuat aplikasi sederhana.',
// 					],
// 					price: 300000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'sophia_tech@example.com',
// 			name: 'Sophia Brown',
// 			skills: ['Teknologi', 'Jaringan Komputer', 'Keamanan Cyber'],
// 			gender: 'Wanita',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/sophia-brown',
// 			portofolio: 'https://sophiabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
// 			about:
// 				'Saya adalah seorang pengajar teknologi dengan minat dalam jaringan komputer dan keamanan cyber.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Teknologi',
// 					company: 'SMA 2 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Spesialis Keamanan Cyber',
// 					company: 'Perusahaan Keamanan TI',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Teknologi',
// 					name: 'Jaringan Komputer SMA',
// 					description: 'Pelajaran jaringan komputer untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan jaringan komputer sebelumnya.',
// 						'Peserta akan belajar tentang konsep dasar jaringan komputer dan praktik implementasinya.',
// 					],
// 					price: 280000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'oliver_tech@example.com',
// 			name: 'Oliver Johnson',
// 			skills: ['Teknologi', 'Pemrograman Web', 'Desain Grafis'],
// 			gender: 'Pria',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/oliver-johnson',
// 			portofolio: 'https://oliverjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/32.jpg',
// 			about:
// 				'Saya adalah seorang pengajar teknologi dengan minat dalam pemrograman web dan desain grafis.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Teknologi',
// 					company: 'SMA 3 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pengembang Front-end',
// 					company: 'Perusahaan IT',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Teknologi',
// 					name: 'Pemrograman Web SMA',
// 					description: 'Pelajaran pemrograman web untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan pemrograman sebelumnya.',
// 						'Peserta akan belajar tentang pengembangan web dari dasar hingga tingkat lanjutan.',
// 					],
// 					price: 320000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'lily_tech@example.com',
// 			name: 'Lily Smith',
// 			skills: ['Teknologi', 'Pemrograman Python', 'Analisis Data'],
// 			gender: 'Wanita',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/lily-smith',
// 			portofolio: 'https://lilysmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/28.jpg',
// 			about:
// 				'Saya adalah seorang pengajar teknologi dengan minat dalam pemrograman Python dan analisis data.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Teknologi',
// 					company: 'SMA 4 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Data Analyst',
// 					company: 'Perusahaan Konsultan IT',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Teknologi',
// 					name: 'Pemrograman Python SMA',
// 					description: 'Pelajaran pemrograman Python untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan pemrograman sebelumnya.',
// 						'Peserta akan belajar tentang bahasa pemrograman Python dan aplikasinya dalam analisis data.',
// 					],
// 					price: 300000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Atas (SMA), Kategori: Biologi
// 		{
// 			userType: 'Mentor',
// 			email: 'julia_bio@example.com',
// 			name: 'Julia Johnson',
// 			skills: ['Biologi', 'Biologi Sel', 'Ekologi'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/julia-johnson',
// 			portofolio: 'https://juliajohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/29.jpg',
// 			about: 'Saya adalah seorang pengajar biologi dengan minat dalam biologi sel dan ekologi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Biologi',
// 					company: 'SMA 1 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Asisten Peneliti Biologi',
// 					company: 'Institut Penelitian Biologi',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Biologi',
// 					name: 'Biologi Sel SMA',
// 					description: 'Pelajaran biologi sel untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar biologi.',
// 						'Peserta akan mempelajari struktur, fungsi, dan peranan sel dalam kehidupan.',
// 					],
// 					price: 250000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'ethan_bio@example.com',
// 			name: 'Ethan Wilson',
// 			skills: ['Biologi', 'Genetika', 'Fisiologi'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/ethan-wilson',
// 			portofolio: 'https://ethanwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/33.jpg',
// 			about: 'Saya adalah seorang pengajar biologi dengan minat dalam genetika dan fisiologi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Biologi',
// 					company: 'SMA 2 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Genetika',
// 					company: 'Laboratorium Genetika',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Biologi',
// 					name: 'Genetika SMA',
// 					description: 'Pelajaran genetika untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar biologi.',
// 						'Peserta akan mempelajari prinsip-prinsip genetika dan aplikasinya dalam berbagai bidang.',
// 					],
// 					price: 260000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'mia_bio@example.com',
// 			name: 'Mia Brown',
// 			skills: ['Biologi', 'Ekologi', 'Evolutionary Biology'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/mia-brown',
// 			portofolio: 'https://miabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/30.jpg',
// 			about:
// 				'Saya adalah seorang pengajar biologi dengan minat dalam ekologi dan evolutionary biology.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Biologi',
// 					company: 'SMA 3 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Ekologi',
// 					company: 'Pusat Penelitian Lingkungan',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Biologi',
// 					name: 'Ekologi SMA',
// 					description: 'Pelajaran ekologi untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar biologi.',
// 						'Peserta akan mempelajari interaksi antara organisme dan lingkungannya.',
// 					],
// 					price: 270000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'jack_bio@example.com',
// 			name: 'Jack Smith',
// 			skills: ['Biologi', 'Biokimia', 'Mikrobiologi'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/jack-smith',
// 			portofolio: 'https://jacksmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
// 			about: 'Saya adalah seorang pengajar biologi dengan minat dalam biokimia dan mikrobiologi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Biologi',
// 					company: 'SMA 4 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Mikrobiologi',
// 					company: 'Institut Mikrobiologi',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Biologi',
// 					name: 'Biokimia SMA',
// 					description: 'Pelajaran biokimia untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar biologi dan kimia.',
// 						'Peserta akan mempelajari struktur, fungsi, dan reaksi kimia dalam organisme hidup.',
// 					],
// 					price: 280000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Atas (SMA), Kategori: Ekonomi
// 		{
// 			userType: 'Mentor',
// 			email: 'emilyj@example.com',
// 			name: 'emily Johnson',
// 			skills: ['Ekonomi', 'Ekonomi Makro', 'Ekonomi Mikro'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/emma-johnson',
// 			portofolio: 'https://emmajohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/31.jpg',
// 			about: 'Saya adalah seorang pengajar ekonomi dengan minat dalam ekonomi makro dan mikro.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Ekonomi',
// 					company: 'SMA 1 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Ekonom',
// 					company: 'Bank Sentral',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Ekonomi',
// 					name: 'Ekonomi Makro SMA',
// 					description: 'Pelajaran ekonomi makro untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan ekonomi sebelumnya.',
// 						'Peserta akan mempelajari konsep dasar ekonomi makro dan aplikasinya dalam kebijakan ekonomi.',
// 					],
// 					price: 250000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'oliver_econ@example.com',
// 			name: 'Oliver Wilson',
// 			skills: ['Ekonomi', 'Manajemen Keuangan', 'Ekonomi Internasional'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/oliver-wilson',
// 			portofolio: 'https://oliverwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/35.jpg',
// 			about:
// 				'Saya adalah seorang pengajar ekonomi dengan minat dalam manajemen keuangan dan ekonomi internasional.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Ekonomi',
// 					company: 'SMA 2 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Analisis Keuangan',
// 					company: 'Perusahaan Konsultan Keuangan',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Ekonomi',
// 					name: 'Manajemen Keuangan SMA',
// 					description: 'Pelajaran manajemen keuangan untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan manajemen keuangan sebelumnya.',
// 						'Peserta akan mempelajari konsep dasar manajemen keuangan dan praktiknya dalam berbagai industri.',
// 					],
// 					price: 260000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'mia_econ@example.com',
// 			name: 'Mia Brown',
// 			skills: ['Ekonomi', 'Perdagangan Internasional', 'Ekonomi Pembangunan'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/mia-brown',
// 			portofolio: 'https://miabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/32.jpg',
// 			about:
// 				'Saya adalah seorang pengajar ekonomi dengan minat dalam perdagangan internasional dan ekonomi pembangunan.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Ekonomi',
// 					company: 'SMA 3 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Konsultan Ekonomi',
// 					company: 'Perusahaan Konsultan Ekonomi',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Ekonomi',
// 					name: 'Perdagangan Internasional SMA',
// 					description: 'Pelajaran perdagangan internasional untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan perdagangan internasional sebelumnya.',
// 						'Peserta akan mempelajari prinsip-prinsip perdagangan internasional dan kebijakannya.',
// 					],
// 					price: 270000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'jack_econ@example.com',
// 			name: 'Jack Smith',
// 			skills: ['Ekonomi', 'Manajemen Sumber Daya Manusia', 'Ekonomi Kreatif'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/jack-smith',
// 			portofolio: 'https://jacksmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/36.jpg',
// 			about:
// 				'Saya adalah seorang pengajar ekonomi dengan minat dalam manajemen sumber daya manusia dan ekonomi kreatif.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Ekonomi',
// 					company: 'SMA 4 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Manajer SDM',
// 					company: 'Perusahaan Kreatif',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Ekonomi',
// 					name: 'Manajemen SDM SMA',
// 					description: 'Pelajaran manajemen sumber daya manusia untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan manajemen SDM sebelumnya.',
// 						'Peserta akan mempelajari konsep dasar manajemen SDM dan praktiknya dalam berbagai industri.',
// 					],
// 					price: 280000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Atas (SMA), Kategori: Fisika
// 		{
// 			userType: 'Mentor',
// 			email: 'james_physics@example.com',
// 			name: 'James Johnson',
// 			skills: ['Fisika', 'Mekanika', 'Elektromagnetisme'],
// 			gender: 'Pria',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/james-johnson',
// 			portofolio: 'https://jamesjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/37.jpg',
// 			about:
// 				'Saya adalah seorang pengajar fisika dengan minat dalam mekanika dan elektromagnetisme.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Fisika',
// 					company: 'SMA 1 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Fisika',
// 					company: 'Institut Fisika',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Fisika',
// 					name: 'Mekanika SMA',
// 					description: 'Pelajaran mekanika untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan fisika sebelumnya.',
// 						'Peserta akan mempelajari konsep dasar mekanika dan penerapannya dalam fisika sehari-hari.',
// 					],
// 					price: 250000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'olivia_physics@example.com',
// 			name: 'Olivia Wilson',
// 			skills: ['Fisika', 'Termodinamika', 'Optika'],
// 			gender: 'Wanita',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/olivia-wilson',
// 			portofolio: 'https://oliviawilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/33.jpg',
// 			about: 'Saya adalah seorang pengajar fisika dengan minat dalam termodinamika dan optika.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Fisika',
// 					company: 'SMA 2 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Fisikawan',
// 					company: 'Laboratorium Fisika',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Fisika',
// 					name: 'Termodinamika SMA',
// 					description: 'Pelajaran termodinamika untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar fisika.',
// 						'Peserta akan mempelajari hukum-hukum termodinamika dan aplikasinya dalam berbagai sistem.',
// 					],
// 					price: 260000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'liam_physics@example.com',
// 			name: 'Liam Brown',
// 			skills: ['Fisika', 'Fisika Modern', 'Fisika Partikel'],
// 			gender: 'Pria',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/liam-brown',
// 			portofolio: 'https://liambrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/38.jpg',
// 			about:
// 				'Saya adalah seorang pengajar fisika dengan minat dalam fisika modern dan fisika partikel.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Fisika',
// 					company: 'SMA 3 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Fisikawan Teori',
// 					company: 'Institut Fisika Teoretis',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Fisika',
// 					name: 'Fisika Modern SMA',
// 					description: 'Pelajaran fisika modern untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar fisika.',
// 						'Peserta akan mempelajari konsep-konsep baru dalam fisika modern dan aplikasinya dalam penelitian.',
// 					],
// 					price: 270000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'lily_physics@example.com',
// 			name: 'Lily Smith',
// 			skills: ['Fisika', 'Fisika Kuantum', 'Fisika Nuklir'],
// 			gender: 'Wanita',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/lily-smith',
// 			portofolio: 'https://lilysmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/34.jpg',
// 			about:
// 				'Saya adalah seorang pengajar fisika dengan minat dalam fisika kuantum dan fisika nuklir.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Fisika',
// 					company: 'SMA 4 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Fisikawan Eksperimental',
// 					company: 'Laboratorium Fisika Nuklir',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Fisika',
// 					name: 'Fisika Kuantum SMA',
// 					description: 'Pelajaran fisika kuantum untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar fisika.',
// 						'Peserta akan mempelajari prinsip-prinsip fisika kuantum dan eksperimen yang terkait.',
// 					],
// 					price: 280000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Atas (SMA), Kategori: Geografi
// 		{
// 			userType: 'Mentor',
// 			email: 'sarah_geo@example.com',
// 			name: 'Sarah Johnson',
// 			skills: ['Geografi', 'Geografi Fisik', 'Geografi Manusia'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/sarah-johnson',
// 			portofolio: 'https://sarahjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/35.jpg',
// 			about: 'Saya adalah seorang pengajar geografi dengan minat dalam geografi fisik dan manusia.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Geografi',
// 					company: 'SMA 1 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Geografi',
// 					company: 'Pusat Penelitian Geografi',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Geografi',
// 					name: 'Geografi Fisik SMA',
// 					description: 'Pelajaran geografi fisik untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan geografi sebelumnya.',
// 						'Peserta akan mempelajari aspek-aspek fisik dari permukaan bumi dan proses-proses yang terjadi di dalamnya.',
// 					],
// 					price: 250000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'oliver_geo@example.com',
// 			name: 'Oliver Wilson',
// 			skills: ['Geografi', 'Kartografi', 'Penginderaan Jauh'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/oliver-wilson',
// 			portofolio: 'https://oliverwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/39.jpg',
// 			about:
// 				'Saya adalah seorang pengajar geografi dengan minat dalam kartografi dan penginderaan jauh.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Geografi',
// 					company: 'SMA 2 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Kartografer',
// 					company: 'Badan Pusat Statistik',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Geografi',
// 					name: 'Kartografi SMA',
// 					description: 'Pelajaran kartografi untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan kartografi sebelumnya.',
// 						'Peserta akan mempelajari prinsip-prinsip pembuatan peta dan aplikasi teknologi dalam kartografi.',
// 					],
// 					price: 260000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'mia_geo@example.com',
// 			name: 'Mia Brown',
// 			skills: ['Geografi', 'Pengelolaan Sumber Daya Alam', 'Pemetaan'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/mia-brown',
// 			portofolio: 'https://miabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/36.jpg',
// 			about:
// 				'Saya adalah seorang pengajar geografi dengan minat dalam pengelolaan sumber daya alam dan pemetaan.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Geografi',
// 					company: 'SMA 3 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Pemetaan dan Sistem Informasi Geografis (SIG)',
// 					company: 'Badan Informasi Geospasial',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Geografi',
// 					name: 'Pengelolaan SDA SMA',
// 					description: 'Pelajaran pengelolaan sumber daya alam untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan khusus sebelumnya.',
// 						'Peserta akan mempelajari konsep-konsep dasar pengelolaan sumber daya alam dan penerapannya dalam kebijakan lingkungan.',
// 					],
// 					price: 270000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'jack_geo@example.com',
// 			name: 'Jack Smith',
// 			skills: ['Geografi', 'Geografi Ekonomi', 'Geografi Politik'],
// 			gender: 'Pria',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/jack-smith',
// 			portofolio: 'https://jacksmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/40.jpg',
// 			about:
// 				'Saya adalah seorang pengajar geografi dengan minat dalam geografi ekonomi dan politik.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Geografi',
// 					company: 'SMA 4 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Konsultan Geografi',
// 					company: 'Perusahaan Konsultan Geografi',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Geografi',
// 					name: 'Geografi Ekonomi SMA',
// 					description: 'Pelajaran geografi ekonomi untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan khusus sebelumnya.',
// 						'Peserta akan mempelajari hubungan antara faktor ekonomi dan geografis dalam pembangunan suatu wilayah.',
// 					],
// 					price: 280000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Sekolah Menengah Atas (SMA), Kategori: Kimia
// 		{
// 			userType: 'Mentor',
// 			email: 'natalie_chem@example.com',
// 			name: 'Natalie Johnson',
// 			skills: ['Kimia', 'Kimia Organik', 'Kimia Anorganik'],
// 			gender: 'Wanita',
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/natalie-johnson',
// 			portofolio: 'https://nataliejohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/37.jpg',
// 			about: 'Saya adalah seorang pengajar kimia dengan minat dalam kimia organik dan anorganik.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Kimia',
// 					company: 'SMA 1 Jakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Peneliti Kimia',
// 					company: 'Pusat Penelitian Kimia',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Kimia',
// 					name: 'Kimia Organik SMA',
// 					description: 'Pelajaran kimia organik untuk siswa SMA.',
// 					terms: [
// 						'Tidak diperlukan pengetahuan kimia sebelumnya.',
// 						'Peserta akan mempelajari struktur, sifat, reaksi, dan aplikasi senyawa organik.',
// 					],
// 					price: 250000,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'owen_chem@example.com',
// 			name: 'Owen Wilson',
// 			skills: ['Kimia', 'Kimia Fisik', 'Kimia Analitik'],
// 			gender: 'Pria',
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/owen-wilson',
// 			portofolio: 'https://owenwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/41.jpg',
// 			about: 'Saya adalah seorang pengajar kimia dengan minat dalam kimia fisik dan analitik.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Kimia',
// 					company: 'SMA 2 Bandung',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Kimawan',
// 					company: 'Perusahaan Kimia',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Kimia',
// 					name: 'Kimia Fisik SMA',
// 					description: 'Pelajaran kimia fisik untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar kimia.',
// 						'Peserta akan mempelajari konsep-konsep kimia yang berkaitan dengan sifat-sifat fisik dan energi dalam reaksi kimia.',
// 					],
// 					price: 260000,
// 					// 55,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emma_chen@example.com',
// 			name: 'Emma chen',
// 			skills: ['Kimia', 'Kimia Biologis', 'Kimia Lingkungan'],
// 			gender: 'Wanita',
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/emma-brown',
// 			portofolio: 'https://emmabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/38.jpg',
// 			about: 'Saya adalah seorang pengajar kimia dengan minat dalam kimia biologis dan lingkungan.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Kimia',
// 					company: 'SMA 3 Surabaya',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Ahli Kimia Lingkungan',
// 					company: 'Badan Lingkungan Hidup',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Kimia',
// 					name: 'Kimia Biologis SMA',
// 					description: 'Pelajaran kimia biologis untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar kimia.',
// 						'Peserta akan mempelajari interaksi kimia dalam sistem biologis dan aplikasinya dalam lingkungan.',
// 					],
// 					price: 270000,
// 					// 50,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'olivia_smith@example.com',
// 			name: 'Olivia Smith',
// 			skills: ['Kimia', 'Kimia Farmasi', 'Kimia Material'],
// 			gender: 'Wanita',
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/olivia-smith',
// 			portofolio: 'https://oliviasmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/39.jpg',
// 			about: 'Saya adalah seorang pengajar kimia dengan minat dalam kimia farmasi dan material.',
// 			experiences: [
// 				{
// 					jobTitle: 'Guru Kimia',
// 					company: 'SMA 4 Yogyakarta',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Kimawan Material',
// 					company: 'Perusahaan Material',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'SMA',
// 					category: 'Kimia',
// 					name: 'Kimia Farmasi SMA',
// 					description: 'Pelajaran kimia farmasi untuk siswa SMA.',
// 					terms: [
// 						'Diperlukan pengetahuan dasar kimia.',
// 						'Peserta akan mempelajari kimia yang berkaitan dengan industri farmasi dan aplikasinya dalam pengobatan.',
// 					],
// 					price: 280000,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// 		 Kuliah :
// 		// Computer Science
// 		//   Desain
// 		//   Teknik Elektro
// 		//   Ilmu Komunikasi
// 		//   Teknik Informasi
// 		//   Manajemen
// 		//   Psikologi
// 		//   Pendidikan Guru

// 		// Mentor Kuliah, Kategori: Computer Science
// 		{
// 			userType: 'Mentor',
// 			email: 'john_cs@example.com',
// 			name: 'John Doe',
// 			skills: ['Computer Science', 'Machine Learning', 'Data Structures'],
// 			gender: 'Pria',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/john-doe',
// 			portofolio: 'https://johndoe.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/42.jpg',
// 			about:
// 				'I am a computer science enthusiast with expertise in machine learning and data structures.',
// 			experiences: [
// 				{
// 					jobTitle: 'Computer Science Instructor',
// 					company: 'University of San Francisco',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Software Engineer',
// 					company: 'Tech Company X',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Computer Science',
// 					name: 'Introduction to Machine Learning',
// 					description: 'Learn the fundamentals of machine learning and its applications.',
// 					terms: [
// 						'No prior experience in machine learning required.',
// 						'Participants will learn about algorithms, models, and practical implementations of machine learning.',
// 					],
// 					price: 300,
// 					// 30,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'jane_cs@example.com',
// 			name: 'Jane Smith',
// 			skills: ['Computer Science', 'Web Development', 'Database Management'],
// 			gender: 'Wanita',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/jane-smith',
// 			portofolio: 'https://janesmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/40.jpg',
// 			about:
// 				'I am a passionate computer scientist specializing in web development and database management.',
// 			experiences: [
// 				{
// 					jobTitle: 'Computer Science Professor',
// 					company: 'New York University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Senior Web Developer',
// 					company: 'Tech Firm Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Computer Science',
// 					name: 'Advanced Web Development',
// 					description: 'Master the concepts and techniques of modern web development.',
// 					terms: [
// 						'Basic understanding of HTML, CSS, and JavaScript required.',
// 						'Participants will learn about frameworks, APIs, and best practices in web development.',
// 					],
// 					price: 250,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'alex_cs@example.com',
// 			name: 'Alex Johnson',
// 			skills: ['Computer Science', 'Cybersecurity', 'Network Administration'],
// 			gender: 'Pria',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/alex-johnson',
// 			portofolio: 'https://alexjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/43.jpg',
// 			about:
// 				'I am a cybersecurity expert dedicated to teaching network administration and cybersecurity.',
// 			experiences: [
// 				{
// 					jobTitle: 'Cybersecurity Instructor',
// 					company: 'University of Illinois',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Chief Information Security Officer',
// 					company: 'Tech Security Solutions',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Computer Science',
// 					name: 'Cybersecurity Fundamentals',
// 					description: 'Explore the basics of cybersecurity and network administration.',
// 					terms: [
// 						'No prior cybersecurity knowledge required.',
// 						'Participants will learn about network security, encryption, and cyber threats.',
// 					],
// 					price: 200,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emily_cs@example.com',
// 			name: 'Emily Brown',
// 			skills: ['Computer Science', 'Software Engineering', 'Mobile App Development'],
// 			gender: 'Wanita',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/emily-brown',
// 			portofolio: 'https://emilybrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/41.jpg',
// 			about:
// 				'I am a software engineer specializing in mobile app development with a passion for teaching.',
// 			experiences: [
// 				{
// 					jobTitle: 'Software Engineering Lecturer',
// 					company: 'University of California, Los Angeles',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Lead Mobile App Developer',
// 					company: 'Tech Startup Z',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Computer Science',
// 					name: 'Mobile App Development Workshop',
// 					description: 'Learn to build mobile applications for iOS and Android platforms.',
// 					terms: [
// 						'Basic understanding of programming concepts required.',
// 						'Participants will learn about app design, development frameworks, and deployment.',
// 					],
// 					price: 350,
// 					// 30,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Kuliah, Kategori: Desain
// 		{
// 			userType: 'Mentor',
// 			email: 'alice_design@example.com',
// 			name: 'Alice Johnson',
// 			skills: ['Desain Grafis', 'Desain Produk', 'Desain Interaksi'],
// 			gender: 'Wanita',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/alice-johnson',
// 			portofolio: 'https://alicejohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/42.jpg',
// 			about:
// 				'I am a passionate designer with expertise in graphic design, product design, and interaction design.',
// 			experiences: [
// 				{
// 					jobTitle: 'Design Professor',
// 					company: 'New York University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Senior Designer',
// 					company: 'Design Firm X',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Desain',
// 					name: 'Graphic Design Fundamentals',
// 					description: 'Learn the basics of graphic design and visual communication.',
// 					terms: [
// 						'No prior design experience required.',
// 						'Participants will learn about typography, color theory, and layout design.',
// 					],
// 					price: 250,
// 					// 30,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'bob_design@example.com',
// 			name: 'Bob Smith',
// 			skills: ['Desain Grafis', 'Desain Interior', 'Desain Mode'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/bob-smith',
// 			portofolio: 'https://bobsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/44.jpg',
// 			about:
// 				'I am a versatile designer specializing in graphic design, interior design, and fashion design.',
// 			experiences: [
// 				{
// 					jobTitle: 'Design Lecturer',
// 					company: 'University of California, Los Angeles',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Fashion Designer',
// 					company: 'Fashion House Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Desain',
// 					name: 'Interior Design Workshop',
// 					description: 'Explore the principles and techniques of interior design.',
// 					terms: [
// 						'No prior design knowledge required.',
// 						'Participants will learn about space planning, color schemes, and materials selection.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emma_design@example.com',
// 			name: 'Emma Brown',
// 			skills: ['Desain Grafis', 'Desain Pakaian', 'Desain Industri'],
// 			gender: 'Wanita',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/emma-brown',
// 			portofolio: 'https://emmabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/43.jpg',
// 			about:
// 				'I am a creative designer passionate about graphic design, fashion design, and industrial design.',
// 			experiences: [
// 				{
// 					jobTitle: 'Design Instructor',
// 					company: 'San Francisco State University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Industrial Designer',
// 					company: 'Design Studio Z',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Desain',
// 					name: 'Fashion Design Basics',
// 					description: 'Learn the fundamentals of fashion design and garment construction.',
// 					terms: [
// 						'No prior fashion design experience required.',
// 						'Participants will learn about sketching, pattern making, and sewing techniques.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_design@example.com',
// 			name: 'David Wilson',
// 			skills: ['Desain Grafis', 'Desain Arsitektur', 'Desain Produk'],
// 			gender: 'Pria',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/david-wilson',
// 			portofolio: 'https://davidwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/45.jpg',
// 			about:
// 				'I am a seasoned designer specializing in graphic design, architecture design, and product design.',
// 			experiences: [
// 				{
// 					jobTitle: 'Design Professor',
// 					company: 'University of Chicago',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Architect',
// 					company: 'Architectural Firm A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Desain',
// 					name: 'Architecture Design Studio',
// 					description: 'Explore architectural design principles and spatial concepts.',
// 					terms: [
// 						'No prior architecture knowledge required.',
// 						'Participants will learn about design theory, site analysis, and architectural drafting.',
// 					],
// 					price: 320,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Kuliah, Kategori: Teknik Elektro
// 		{
// 			userType: 'Mentor',
// 			email: 'alex_electro@example.com',
// 			name: 'Alex Johnson',
// 			skills: ['Teknik Elektro', 'Kelistrikan', 'Elektronika'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/alex-johnson',
// 			portofolio: 'https://alexjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/46.jpg',
// 			about:
// 				'I am a passionate electrical engineer with expertise in power systems and electronics.',
// 			experiences: [
// 				{
// 					jobTitle: 'Electrical Engineering Professor',
// 					company: 'University of California, Los Angeles',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Senior Electrical Engineer',
// 					company: 'Engineering Firm X',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Teknik Elektro',
// 					name: 'Power Systems Engineering',
// 					description: 'Explore the principles and applications of power systems engineering.',
// 					terms: [
// 						'Basic understanding of electrical circuits required.',
// 						'Participants will learn about power generation, transmission, and distribution.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'sara_electro@example.com',
// 			name: 'Sara Wilson',
// 			skills: ['Teknik Elektro', 'Control Systems', 'Renewable Energy'],
// 			gender: 'Wanita',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/sara-wilson',
// 			portofolio: 'https://sarawilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/44.jpg',
// 			about:
// 				'I am a dedicated engineer specializing in control systems and renewable energy technologies.',
// 			experiences: [
// 				{
// 					jobTitle: 'Electrical Engineering Lecturer',
// 					company: 'University of Illinois',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Renewable Energy Consultant',
// 					company: 'Energy Solutions Company Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Teknik Elektro',
// 					name: 'Renewable Energy Systems',
// 					description:
// 						'Learn about renewable energy technologies and their integration into power systems.',
// 					terms: [
// 						'Basic understanding of electrical engineering principles required.',
// 						'Participants will learn about solar, wind, and hydroelectric power generation.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'chris_electro@example.com',
// 			name: 'Chris Brown',
// 			skills: ['Teknik Elektro', 'Digital Systems', 'Embedded Systems'],
// 			gender: 'Pria',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/chris-brown',
// 			portofolio: 'https://chrisbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/47.jpg',
// 			about:
// 				'I am a versatile engineer with expertise in digital systems and embedded systems design.',
// 			experiences: [
// 				{
// 					jobTitle: 'Electrical Engineering Instructor',
// 					company: 'New York University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Embedded Systems Engineer',
// 					company: 'Technology Firm Z',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Teknik Elektro',
// 					name: 'Embedded Systems Design',
// 					description: 'Explore the design and implementation of embedded systems.',
// 					terms: [
// 						'Basic understanding of digital electronics required.',
// 						'Participants will learn about microcontrollers, sensors, and real-time operating systems.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'julia_electro@example.com',
// 			name: 'Julia Smith',
// 			skills: ['Teknik Elektro', 'Power Electronics', 'Electric Drives'],
// 			gender: 'Wanita',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/julia-smith',
// 			portofolio: 'https://juliasmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/45.jpg',
// 			about: 'I am an experienced engineer specializing in power electronics and electric drives.',
// 			experiences: [
// 				{
// 					jobTitle: 'Electrical Engineering Professor',
// 					company: 'San Francisco State University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Power Electronics Engineer',
// 					company: 'Power Systems Corporation',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Teknik Elektro',
// 					name: 'Power Electronics Fundamentals',
// 					description: 'Learn about power electronic converters and their applications.',
// 					terms: [
// 						'Basic understanding of electrical circuits and semiconductor devices required.',
// 						'Participants will learn about power semiconductor devices, converter topologies, and control techniques.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Kuliah, Kategori: Ilmu Komunikasi
// 		{
// 			userType: 'Mentor',
// 			email: 'sarah_communication@example.com',
// 			name: 'Sarah Johnson',
// 			skills: ['Ilmu Komunikasi', 'Public Relations', 'Media Studies'],
// 			gender: 'Wanita',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/sarah-johnson',
// 			portofolio: 'https://sarahjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/46.jpg',
// 			about: 'I am a communication expert with a focus on public relations and media studies.',
// 			experiences: [
// 				{
// 					jobTitle: 'Communication Professor',
// 					company: 'University of California, Los Angeles',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Public Relations Consultant',
// 					company: 'PR Agency X',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Ilmu Komunikasi',
// 					name: 'Public Relations Fundamentals',
// 					description:
// 						'Explore the principles and practices of public relations in contemporary society.',
// 					terms: [
// 						'No prior knowledge of public relations required.',
// 						'Participants will learn about communication strategies, media relations, and crisis management.',
// 					],
// 					price: 250,
// 					// 30,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_communication@example.com',
// 			name: 'David Brown',
// 			skills: ['Ilmu Komunikasi', 'Corporate Communication', 'Intercultural Communication'],
// 			gender: 'Pria',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/david-brown',
// 			portofolio: 'https://davidbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/48.jpg',
// 			about:
// 				'I am a communication specialist with expertise in corporate communication and intercultural communication.',
// 			experiences: [
// 				{
// 					jobTitle: 'Communication Lecturer',
// 					company: 'New York University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Corporate Communication Manager',
// 					company: 'Multinational Corporation Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Ilmu Komunikasi',
// 					name: 'Corporate Communication Strategies',
// 					description:
// 						'Learn about effective communication strategies for organizations and businesses.',
// 					terms: [
// 						'No prior knowledge of corporate communication required.',
// 						'Participants will learn about internal communication, crisis communication, and stakeholder engagement.',
// 					],
// 					price: 280,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'anna_communication@example.com',
// 			name: 'Anna Smith',
// 			skills: ['Ilmu Komunikasi', 'Media and Society', 'Digital Communication'],
// 			gender: 'Wanita',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/anna-smith',
// 			portofolio: 'https://annasmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/47.jpg',
// 			about:
// 				'I am a communication scholar specializing in media studies and digital communication.',
// 			experiences: [
// 				{
// 					jobTitle: 'Communication Professor',
// 					company: 'University of Illinois',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Digital Media Consultant',
// 					company: 'Digital Marketing Agency Z',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Ilmu Komunikasi',
// 					name: 'Digital Media Literacy',
// 					description: 'Explore the impact of digital technologies on communication and society.',
// 					terms: [
// 						'No prior knowledge of digital communication required.',
// 						'Participants will learn about social media, online journalism, and digital storytelling.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'michael_communication@example.com',
// 			name: 'Michael Wilson',
// 			skills: ['Ilmu Komunikasi', 'Political Communication', 'Persuasion Theory'],
// 			gender: 'Pria',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/michael-wilson',
// 			portofolio: 'https://michaelwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/49.jpg',
// 			about:
// 				'I am a communication researcher with a focus on political communication and persuasion theory.',
// 			experiences: [
// 				{
// 					jobTitle: 'Communication Researcher',
// 					company: 'Stanford University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Political Campaign Strategist',
// 					company: 'Political Consulting Firm A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Ilmu Komunikasi',
// 					name: 'Political Communication in the Digital Age',
// 					description:
// 						'Explore the intersection of politics, media, and communication in contemporary society.',
// 					terms: [
// 						'No prior knowledge of political communication required.',
// 						'Participants will learn about campaign strategies, media framing, and public opinion.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Kuliah, Kategori: Teknik Informasi
// 		{
// 			userType: 'Mentor',
// 			email: 'adam_info@example.com',
// 			name: 'Adam Johnson',
// 			skills: ['Teknik Informasi', 'Sistem Informasi', 'Keamanan Informasi'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/adam-johnson',
// 			portofolio: 'https://adamjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/50.jpg',
// 			about:
// 				'I am an experienced information technologist with expertise in information systems and security.',
// 			experiences: [
// 				{
// 					jobTitle: 'Information Technology Professor',
// 					company: 'University of California, Los Angeles',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Cybersecurity Analyst',
// 					company: 'IT Security Firm X',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Teknik Informasi',
// 					name: 'Information Systems Design',
// 					description:
// 						'Learn about the design and implementation of information systems for organizations.',
// 					terms: [
// 						'Basic understanding of information technology concepts required.',
// 						'Participants will learn about system analysis, database design, and software development.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'sophia_info@example.com',
// 			name: 'Sophia Brown',
// 			skills: ['Teknik Informasi', 'Cloud Computing', 'Big Data Analytics'],
// 			gender: 'Wanita',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/sophia-brown',
// 			portofolio: 'https://sophiabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/48.jpg',
// 			about: 'I am a technology enthusiast specializing in cloud computing and big data analytics.',
// 			experiences: [
// 				{
// 					jobTitle: 'Information Technology Lecturer',
// 					company: 'New York University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Cloud Solutions Architect',
// 					company: 'Cloud Services Company Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Teknik Informasi',
// 					name: 'Cloud Computing Essentials',
// 					description: 'Explore the fundamentals of cloud computing technologies and platforms.',
// 					terms: [
// 						'No prior knowledge of cloud computing required.',
// 						'Participants will learn about cloud service models, deployment models, and security considerations.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'james_info@example.com',
// 			name: 'James Wilson',
// 			skills: ['Teknik Informasi', 'Software Engineering', 'Web Development'],
// 			gender: 'Pria',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/james-wilson',
// 			portofolio: 'https://jameswilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/51.jpg',
// 			about:
// 				'I am a software engineer with expertise in web development and software architecture.',
// 			experiences: [
// 				{
// 					jobTitle: 'Software Engineering Professor',
// 					company: 'University of Illinois',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Lead Web Developer',
// 					company: 'Software Development Firm Z',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Teknik Informasi',
// 					name: 'Web Development Bootcamp',
// 					description:
// 						'Master the art of web development with hands-on projects and real-world applications.',
// 					terms: [
// 						'Basic understanding of programming concepts required.',
// 						'Participants will learn about HTML, CSS, JavaScript, and popular web development frameworks.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emily_info@example.com',
// 			name: 'Emily Smith',
// 			skills: ['Teknik Informasi', 'Database Management', 'Network Administration'],
// 			gender: 'Wanita',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/emily-smith',
// 			portofolio: 'https://emilysmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/49.jpg',
// 			about:
// 				'I am an IT professional specializing in database management and network administration.',
// 			experiences: [
// 				{
// 					jobTitle: 'Information Technology Instructor',
// 					company: 'San Francisco State University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Database Administrator',
// 					company: 'Technology Company A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Teknik Informasi',
// 					name: 'Database Management Essentials',
// 					description: 'Learn about database concepts, design, and management techniques.',
// 					terms: [
// 						'No prior knowledge of database management required.',
// 						'Participants will learn about relational databases, SQL queries, and database administration.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Kuliah, Kategori: Manajemen
// 		{
// 			userType: 'Mentor',
// 			email: 'john_management@example.com',
// 			name: 'John Johnson',
// 			skills: ['Manajemen', 'Manajemen Strategis', 'Manajemen Operasional'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/john-johnson',
// 			portofolio: 'https://johnjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/52.jpg',
// 			about:
// 				'I am a seasoned management professional with expertise in strategic management and operations.',
// 			experiences: [
// 				{
// 					jobTitle: 'Management Professor',
// 					company: 'University of California, Los Angeles',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Management Consultant',
// 					company: 'Consulting Firm X',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Manajemen',
// 					name: 'Strategic Management',
// 					description:
// 						'Learn about the formulation and implementation of strategic plans in organizations.',
// 					terms: [
// 						'No prior knowledge of management required.',
// 						'Participants will learn about SWOT analysis, competitive strategy, and strategic decision-making.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'lisa_management@example.com',
// 			name: 'Lisa Brown',
// 			skills: ['Manajemen', 'Manajemen Sumber Daya Manusia', 'Manajemen Proyek'],
// 			gender: 'Wanita',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/lisa-brown',
// 			portofolio: 'https://lisabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/50.jpg',
// 			about: 'I am a human resource management expert with experience in project management.',
// 			experiences: [
// 				{
// 					jobTitle: 'Human Resource Management Lecturer',
// 					company: 'New York University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Project Manager',
// 					company: 'Project Management Firm Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Manajemen',
// 					name: 'Human Resource Management Fundamentals',
// 					description:
// 						'Learn about the principles and practices of managing human resources in organizations.',
// 					terms: [
// 						'No prior knowledge of HR management required.',
// 						'Participants will learn about recruitment, training, performance evaluation, and employee relations.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'mark_management@example.com',
// 			name: 'Mark Wilson',
// 			skills: ['Manajemen', 'Manajemen Keuangan', 'Manajemen Produksi'],
// 			gender: 'Pria',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/mark-wilson',
// 			portofolio: 'https://markwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/53.jpg',
// 			about: 'I am a finance management expert with knowledge in production management.',
// 			experiences: [
// 				{
// 					jobTitle: 'Finance Management Professor',
// 					company: 'University of Illinois',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Production Manager',
// 					company: 'Manufacturing Company Z',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Manajemen',
// 					name: 'Financial Management Principles',
// 					description:
// 						'Learn about financial management concepts and techniques in business organizations.',
// 					terms: [
// 						'No prior knowledge of finance required.',
// 						'Participants will learn about financial analysis, budgeting, and capital investment decisions.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emma_management@example.com',
// 			name: 'Emma Smith',
// 			skills: ['Manajemen', 'Manajemen Operasi', 'Manajemen Bisnis'],
// 			gender: 'Wanita',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/emma-smith',
// 			portofolio: 'https://emmasmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/51.jpg',
// 			about: 'I am a business management professional with expertise in operations management.',
// 			experiences: [
// 				{
// 					jobTitle: 'Business Management Instructor',
// 					company: 'San Francisco State University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Operations Manager',
// 					company: 'Retail Company A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Manajemen',
// 					name: 'Operations Management Essentials',
// 					description:
// 						'Learn about the principles and strategies of operations management in various industries.',
// 					terms: [
// 						'No prior knowledge of operations management required.',
// 						'Participants will learn about process design, supply chain management, and quality control.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Kuliah, Kategori: Psikologi
// 		{
// 			userType: 'Mentor',
// 			email: 'jennifer_psychology@example.com',
// 			name: 'Jennifer Johnson',
// 			skills: ['Psikologi', 'Psikologi Klinis', 'Psikologi Perkembangan'],
// 			gender: 'Wanita',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/jennifer-johnson',
// 			portofolio: 'https://jenniferjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/52.jpg',
// 			about: 'I am a clinical psychologist with expertise in developmental psychology.',
// 			experiences: [
// 				{
// 					jobTitle: 'Psychology Professor',
// 					company: 'University of California, Los Angeles',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Clinical Psychologist',
// 					company: 'Mental Health Clinic X',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Psikologi',
// 					name: 'Introduction to Clinical Psychology',
// 					description: 'Explore the basics of clinical psychology and therapeutic interventions.',
// 					terms: [
// 						'No prior knowledge of psychology required.',
// 						'Participants will learn about assessment, diagnosis, and treatment of psychological disorders.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'michael_psychology@example.com',
// 			name: 'Michael Brown',
// 			skills: ['Psikologi', 'Psikologi Kognitif', 'Psikologi Sosial'],
// 			gender: 'Pria',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/michael-brown',
// 			portofolio: 'https://michaelbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/54.jpg',
// 			about: 'I am a cognitive psychologist with knowledge in social psychology.',
// 			experiences: [
// 				{
// 					jobTitle: 'Psychology Lecturer',
// 					company: 'New York University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Research Psychologist',
// 					company: 'Research Institute Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Psikologi',
// 					name: 'Cognitive Psychology Fundamentals',
// 					description:
// 						'Learn about the cognitive processes underlying human behavior and mental processes.',
// 					terms: [
// 						'No prior knowledge of psychology required.',
// 						'Participants will learn about memory, perception, attention, and problem-solving.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emily_psychology@example.com',
// 			name: 'Emily Wilson',
// 			skills: ['Psikologi', 'Psikologi Pendidikan', 'Psikologi Industri dan Organisasi'],
// 			gender: 'Wanita',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/emily-wilson',
// 			portofolio: 'https://emilywilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/53.jpg',
// 			about:
// 				'I am an educational psychologist with expertise in industrial and organizational psychology.',
// 			experiences: [
// 				{
// 					jobTitle: 'Psychology Professor',
// 					company: 'University of Illinois',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Human Resource Psychologist',
// 					company: 'HR Consultancy Z',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Psikologi',
// 					name: 'Educational Psychology',
// 					description:
// 						'Explore the application of psychological principles in educational settings.',
// 					terms: [
// 						'No prior knowledge of psychology required.',
// 						'Participants will learn about learning theories, motivation, and instructional design.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_psychology@example.com',
// 			name: 'David Smith',
// 			skills: ['Psikologi', 'Psikologi Abnormal', 'Psikologi Positif'],
// 			gender: 'Pria',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/david-smith',
// 			portofolio: 'https://davidsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/55.jpg',
// 			about: 'I am a psychologist specializing in abnormal psychology and positive psychology.',
// 			experiences: [
// 				{
// 					jobTitle: 'Psychology Researcher',
// 					company: 'Stanford University',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Clinical Psychologist',
// 					company: 'Private Practice',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Psikologi',
// 					name: 'Abnormal Psychology',
// 					description: 'Explore the causes, symptoms, and treatment of psychological disorders.',
// 					terms: [
// 						'No prior knowledge of psychology required.',
// 						'Participants will learn about various mental disorders and therapeutic approaches.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},

// 		// Mentor Kuliah, Kategori: Pendidikan Guru
// 		{
// 			userType: 'Mentor',
// 			email: 'anna_education@example.com',
// 			name: 'Anna Johnson',
// 			skills: ['Pendidikan Guru', 'Metode Pengajaran', 'Evaluasi Pembelajaran'],
// 			gender: 'Wanita',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/anna-johnson',
// 			portofolio: 'https://annajohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/54.jpg',
// 			about:
// 				'I am an experienced educator with expertise in teaching methods and learning assessment.',
// 			experiences: [
// 				{
// 					jobTitle: 'Education Professor',
// 					company: 'University of California, Los Angeles',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Teacher Trainer',
// 					company: 'Educational Institute X',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Pendidikan Guru',
// 					name: 'Teaching Methods and Strategies',
// 					description: 'Explore effective teaching methods and strategies for diverse learners.',
// 					terms: [
// 						'No prior knowledge of education required.',
// 						'Participants will learn about lesson planning, classroom management, and student engagement.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'daniel_education@example.com',
// 			name: 'Daniel Brown',
// 			skills: ['Pendidikan Guru', 'Kurikulum dan Pembelajaran', 'Pengembangan Kurikulum'],
// 			gender: 'Pria',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/daniel-brown',
// 			portofolio: 'https://danielbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/56.jpg',
// 			about:
// 				'I am an educational consultant with expertise in curriculum development and instructional design.',
// 			experiences: [
// 				{
// 					jobTitle: 'Curriculum Specialist',
// 					company: 'Educational Consulting Firm Y',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Teacher',
// 					company: 'High School Z',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Pendidikan Guru',
// 					name: 'Curriculum Development Workshop',
// 					description:
// 						'Learn how to design and implement effective curricula for educational settings.',
// 					terms: [
// 						'No prior knowledge of curriculum development required.',
// 						'Participants will learn about curriculum models, assessment strategies, and alignment with standards.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'sarah_education@example.com',
// 			name: 'Sarah Wilson',
// 			skills: ['Pendidikan Guru', 'Pendidikan Inklusif', 'Pengelolaan Kelas'],
// 			gender: 'Wanita',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/sarah-wilson',
// 			portofolio: 'https://sarahwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/55.jpg',
// 			about:
// 				'I am a special education teacher with expertise in inclusive education and classroom management.',
// 			experiences: [
// 				{
// 					jobTitle: 'Special Education Teacher',
// 					company: 'Elementary School A',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Inclusion Coordinator',
// 					company: 'School District B',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Pendidikan Guru',
// 					name: 'Inclusive Education Practices',
// 					description:
// 						'Learn strategies for creating inclusive learning environments for students with diverse needs.',
// 					terms: [
// 						'No prior knowledge of inclusive education required.',
// 						'Participants will learn about differentiation, accommodations, and collaboration with stakeholders.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'peter_education@example.com',
// 			name: 'Peter Smith',
// 			skills: ['Pendidikan Guru', 'Evaluasi Pembelajaran', 'Konseling Pendidikan'],
// 			gender: 'Pria',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/peter-smith',
// 			portofolio: 'https://petersmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/57.jpg',
// 			about:
// 				'I am an educational counselor with expertise in learning assessment and educational counseling.',
// 			experiences: [
// 				{
// 					jobTitle: 'Educational Counselor',
// 					company: 'High School C',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Assessment Specialist',
// 					company: 'Education Assessment Center',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Kuliah',
// 					category: 'Pendidikan Guru',
// 					name: 'Educational Assessment Workshop',
// 					description:
// 						'Learn about various assessment methods and their application in educational settings.',
// 					terms: [
// 						'No prior knowledge of educational assessment required.',
// 						'Participants will learn about formative assessment, summative assessment, and data analysis.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 		},
// 		// 		  Karier :
// 		// Back End
// 		//   Front End
// 		//   Data Analyst
// 		//   Finance
// 		//   Marketing
// 		//   Quality Assurance
// 		//   Security Engineer
// 		// Desain

// 		// Mentor Karier, Kategori: Back End
// 		{
// 			userType: 'Mentor',
// 			email: 'john_backend@example.com',
// 			name: 'John Johnson',
// 			skills: ['Back End Development', 'Java', 'Spring Boot'],
// 			gender: 'Pria',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/john-johnson',
// 			portofolio: 'https://johnjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/58.jpg',
// 			about: 'I am a seasoned back end developer with expertise in Java and Spring Boot.',
// 			experiences: [
// 				{
// 					jobTitle: 'Senior Back End Developer',
// 					company: 'Tech Company X',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Software Engineer',
// 					company: 'Software Development Firm Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Back End',
// 					name: 'Java Spring Boot Masterclass',
// 					description: 'Master back end development with Java and Spring Boot framework.',
// 					terms: [
// 						'Basic understanding of programming concepts required.',
// 						'Participants will learn about RESTful APIs, database integration, and security.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 			session: {
// 				create: [
// 					{
// 						title: 'Building RESTful APIs with Spring Boot',
// 						description:
// 							'Learn how to build RESTful APIs with Spring Boot framework and integrate them with databases.',
// 						dateTime: '2024-03-15T00:00:00Z',
// 						startTime: '2024-03-15T10:00:00Z',
// 						endTime: '2024-03-15T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Back End',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'jane_backend@example.com',
// 			name: 'Jane Smith',
// 			skills: ['Back End Development', 'Python', 'Django'],
// 			gender: 'Wanita',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/jane-smith',
// 			portofolio: 'https://janesmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/56.jpg',
// 			about: 'I am a back end developer specializing in Python and Django web framework.',
// 			experiences: [
// 				{
// 					jobTitle: 'Back End Developer',
// 					company: 'Software Company Z',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Python Developer',
// 					company: 'Technology Startup A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Back End',
// 					name: 'Python Django Web Development',
// 					description: 'Learn back end web development with Python and Django framework.',
// 					terms: [
// 						'Basic understanding of Python programming required.',
// 						'Participants will learn about model-view-controller (MVC) architecture, routing, and authentication.',
// 					],
// 					price: 280,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 			session: {
// 				create: [
// 					{
// 						title: 'Building Web Applications with Django',
// 						description:
// 							'Learn how to build web applications with Django framework and integrate them with databases.',
// 						dateTime: '2024-03-20T00:00:00Z',
// 						startTime: '2024-03-20T10:00:00Z',
// 						endTime: '2024-03-20T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Back End',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_backend@example.com',
// 			name: 'David Wilson',
// 			skills: ['Back End Development', 'Node.js', 'Express.js'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/david-wilson',
// 			portofolio: 'https://davidwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/59.jpg',
// 			about: 'I am a back end developer proficient in Node.js and Express.js frameworks.',
// 			experiences: [
// 				{
// 					jobTitle: 'Lead Back End Developer',
// 					company: 'Tech Startup B',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Full Stack Developer',
// 					company: 'Software Development Agency C',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Back End',
// 					name: 'Node.js Express.js Masterclass',
// 					description: 'Master back end development with Node.js and Express.js framework.',
// 					terms: [
// 						'Basic understanding of JavaScript required.',
// 						'Participants will learn about asynchronous programming, middleware, and RESTful APIs.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 			session: {
// 				create: [
// 					{
// 						title: 'Building RESTful APIs with Express.js',
// 						description:
// 							'Learn how to build RESTful APIs with Express.js framework and integrate them with databases.',
// 						dateTime: '2024-03-25T00:00:00Z',
// 						startTime: '2024-03-25T10:00:00Z',
// 						endTime: '2024-03-25T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Back End',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emily_backend@example.com',
// 			name: 'Emily Brown',
// 			skills: ['Back End Development', 'Ruby on Rails', 'API Development'],
// 			gender: 'Wanita',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/emily-brown',
// 			portofolio: 'https://emilybrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/57.jpg',
// 			about:
// 				'I am a back end developer experienced in Ruby on Rails framework and API development.',
// 			experiences: [
// 				{
// 					jobTitle: 'Senior Software Engineer',
// 					company: 'Software Company D',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Ruby on Rails Developer',
// 					company: 'Technology Firm E',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Back End',
// 					name: 'Ruby on Rails API Development',
// 					description:
// 						'Learn back end development with Ruby on Rails framework and API development.',
// 					terms: [
// 						'Basic understanding of Ruby programming required.',
// 						'Participants will learn about MVC architecture, routing, and serialization.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 			session: {
// 				create: [
// 					{
// 						title: 'Building RESTful APIs with Ruby on Rails',
// 						description:
// 							'Learn how to build RESTful APIs with Ruby on Rails framework and integrate them with databases.',
// 						dateTime: '2024-03-30T00:00:00Z',
// 						startTime: '2024-03-30T10:00:00Z',
// 						endTime: '2024-03-30T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Back End',
// 					},
// 				],
// 			},
// 		},

// 		// Mentor Karier, Kategori: Front End
// 		{
// 			userType: 'Mentor',
// 			email: 'sarah_frontend@example.com',
// 			name: 'Sarah Johnson',
// 			skills: ['Front End Development', 'HTML', 'CSS', 'JavaScript'],
// 			gender: 'Wanita',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/sarah-johnson',
// 			portofolio: 'https://sarahjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/58.jpg',
// 			about: 'I am a front end developer proficient in HTML, CSS, and JavaScript.',
// 			experiences: [
// 				{
// 					jobTitle: 'Senior Front End Developer',
// 					company: 'Tech Company X',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Web Developer',
// 					company: 'Web Development Agency Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Front End',
// 					name: 'HTML CSS JavaScript Essentials',
// 					description: 'Master front end development with HTML, CSS, and JavaScript.',
// 					terms: [
// 						'No prior knowledge of web development required.',
// 						'Participants will learn about web design principles, responsive design, and interactivity.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 			session: {
// 				create: [
// 					{
// 						title: 'Building Responsive Websites with HTML and CSS',
// 						description:
// 							'Learn how to build responsive websites with HTML and CSS and optimize them for various devices.',
// 						dateTime: '2024-04-05T00:00:00Z',
// 						startTime: '2024-04-05T10:00:00Z',
// 						endTime: '2024-04-05T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Front End',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'mark_frontend@example.com',
// 			name: 'Mark Smith',
// 			skills: ['Front End Development', 'React', 'Redux'],
// 			gender: 'Pria',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/mark-smith',
// 			portofolio: 'https://marksmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/60.jpg',
// 			about: 'I am a front end developer specialized in React.js and Redux state management.',
// 			experiences: [
// 				{
// 					jobTitle: 'Lead Front End Developer',
// 					company: 'Software Company Z',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'React Developer',
// 					company: 'Technology Startup A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Front End',
// 					name: 'React.js Fundamentals',
// 					description:
// 						'Learn front end development with React.js library and state management with Redux.',
// 					terms: [
// 						'Basic understanding of JavaScript required.',
// 						'Participants will learn about component-based architecture, virtual DOM, and state management.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Building Web Applications with React.js',
// 						description:
// 							'Learn how to build web applications with React.js library and manage state with Redux.',
// 						dateTime: '2024-04-10T00:00:00Z',
// 						startTime: '2024-04-10T10:00:00Z',
// 						endTime: '2024-04-10T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Front End',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_frontend@example.com',
// 			name: 'David Wilson',
// 			skills: ['Front End Development', 'Vue.js', 'Vuex'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/david-wilson',
// 			portofolio: 'https://davidwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/61.jpg',
// 			about:
// 				'I am a front end developer experienced in Vue.js framework and Vuex state management.',
// 			experiences: [
// 				{
// 					jobTitle: 'Front End Engineer',
// 					company: 'Tech Startup B',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Vue.js Developer',
// 					company: 'Software Development Agency C',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Front End',
// 					name: 'Vue.js Essentials',
// 					description:
// 						'Learn front end development with Vue.js framework and state management with Vuex.',
// 					terms: [
// 						'Basic understanding of HTML, CSS, and JavaScript required.',
// 						'Participants will learn about Vue components, directives, and reactive data binding.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Building Web Applications with Vue.js',
// 						description:
// 							'Learn how to build web applications with Vue.js framework and manage state with Vuex.',
// 						dateTime: '2024-04-15T00:00:00Z',
// 						startTime: '2024-04-15T10:00:00Z',
// 						endTime: '2024-04-15T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Front End',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emily_frontend@example.com',
// 			name: 'Emily Brown',
// 			skills: ['Front End Development', 'Angular', 'RxJS'],
// 			gender: 'Wanita',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/emily-brown',
// 			portofolio: 'https://emilybrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/59.jpg',
// 			about:
// 				'I am a front end developer proficient in Angular framework and reactive programming with RxJS.',
// 			experiences: [
// 				{
// 					jobTitle: 'Senior Software Engineer',
// 					company: 'Software Company D',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Angular Developer',
// 					company: 'Technology Firm E',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Front End',
// 					name: 'Angular Fundamentals',
// 					description:
// 						'Learn front end development with Angular framework and reactive programming with RxJS.',
// 					terms: [
// 						'Basic understanding of TypeScript required.',
// 						'Participants will learn about Angular components, services, and observables.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Building Web Applications with Angular',
// 						description:
// 							'Learn how to build web applications with Angular framework and manage state with RxJS.',
// 						dateTime: '2024-04-20T00:00:00Z',
// 						startTime: '2024-04-20T10:00:00Z',
// 						endTime: '2024-04-20T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Front End',
// 					},
// 				],
// 			},
// 		},

// 		// Mentor Karier, Kategori: Data Analyst
// 		{
// 			userType: 'Mentor',
// 			email: 'alice_data@example.com',
// 			name: 'Alice Johnson',
// 			skills: ['Data Analysis', 'SQL', 'Python', 'Data Visualization'],
// 			gender: 'Wanita',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/alice-johnson',
// 			portofolio: 'https://alicejohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/60.jpg',
// 			about:
// 				'I am a data analyst with expertise in SQL, Python, and data visualization techniques.',
// 			experiences: [
// 				{
// 					jobTitle: 'Senior Data Analyst',
// 					company: 'Tech Company X',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Data Scientist',
// 					company: 'Data Analytics Firm Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Data Analyst',
// 					name: 'Data Analysis with SQL and Python',
// 					description: 'Learn data analysis skills using SQL queries and Python programming.',
// 					terms: [
// 						'No prior knowledge of data analysis required.',
// 						'Participants will learn about data manipulation, querying databases, and data visualization.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Data Analysis with SQL',
// 						description:
// 							'Learn how to perform data analysis with SQL queries and visualize the results.',
// 						dateTime: '2024-04-25T00:00:00Z',
// 						startTime: '2024-04-25T10:00:00Z',
// 						endTime: '2024-04-25T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Data Analyst',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_data@example.com',
// 			name: 'David Smith',
// 			skills: ['Data Analysis', 'R', 'Machine Learning', 'Statistical Analysis'],
// 			gender: 'Pria',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/david-smith',
// 			portofolio: 'https://davidsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/62.jpg',
// 			about:
// 				'I am a data analyst with expertise in R programming, machine learning, and statistical analysis.',
// 			experiences: [
// 				{
// 					jobTitle: 'Lead Data Analyst',
// 					company: 'Data Science Company Z',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Data Engineer',
// 					company: 'Data Solutions Firm A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Data Analyst',
// 					name: 'Data Analysis with R and Machine Learning',
// 					description:
// 						'Learn data analysis techniques using R programming language and machine learning algorithms.',
// 					terms: [
// 						'Basic understanding of statistics and programming concepts required.',
// 						'Participants will learn about data preprocessing, exploratory data analysis, and predictive modeling.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},
// 			session: {
// 				create: [
// 					{
// 						title: 'Machine Learning with R',
// 						description:
// 							'Learn how to build machine learning models with R programming language and apply them to real-world datasets.',
// 						dateTime: '2024-04-30T00:00:00Z',
// 						startTime: '2024-04-30T10:00:00Z',
// 						endTime: '2024-04-30T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Data Analyst',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emma_data@example.com',
// 			name: 'Emma Wilson',
// 			skills: ['Data Analysis', 'Excel', 'Data Visualization', 'Dashboarding'],
// 			gender: 'Wanita',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/emma-wilson',
// 			portofolio: 'https://emmawilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/61.jpg',
// 			about:
// 				'I am a data analyst proficient in Excel, data visualization, and dashboarding techniques.',
// 			experiences: [
// 				{
// 					jobTitle: 'Data Analyst',
// 					company: 'Analytics Consulting Firm B',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Business Analyst',
// 					company: 'Business Intelligence Company C',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Data Analyst',
// 					name: 'Data Analysis with Excel and Visualization',
// 					description: 'Learn data analysis skills using Excel and data visualization tools.',
// 					terms: [
// 						'No prior knowledge of data analysis required.',
// 						'Participants will learn about data cleaning, pivot tables, charts, and creating dashboards.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Data Visualization with Excel',
// 						description:
// 							'Learn how to create visualizations and dashboards with Excel and present data insights effectively.',
// 						dateTime: '2024-05-05T00:00:00Z',
// 						startTime: '2024-05-05T10:00:00Z',
// 						endTime: '2024-05-05T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Data Analyst',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'ethan_data@example.com',
// 			name: 'Ethan Brown',
// 			skills: ['Data Analysis', 'Python', 'Pandas', 'Data Mining'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/ethan-brown',
// 			portofolio: 'https://ethanbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/63.jpg',
// 			about:
// 				'I am a data analyst with expertise in Python programming, Pandas library, and data mining techniques.',
// 			experiences: [
// 				{
// 					jobTitle: 'Data Scientist',
// 					company: 'Data Analytics Startup D',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Data Analyst',
// 					company: 'Data Solutions Company E',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Data Analyst',
// 					name: 'Data Analysis with Python and Pandas',
// 					description:
// 						'Learn data analysis skills using Python programming language and Pandas library.',
// 					terms: [
// 						'Basic understanding of programming concepts required.',
// 						'Participants will learn about data manipulation, exploratory data analysis, and data mining.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Data Mining with Python',
// 						description:
// 							'Learn how to extract valuable insights from large datasets using Python and data mining techniques.',
// 						dateTime: '2024-05-10T00:00:00Z',
// 						startTime: '2024-05-10T10:00:00Z',
// 						endTime: '2024-05-10T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Data Analyst',
// 					},
// 				],
// 			},
// 		},

// 		// Mentor Karier, Kategori: Finance
// 		{
// 			userType: 'Mentor',
// 			email: 'alex_finance@example.com',
// 			name: 'Alex Johnson',
// 			skills: ['Finance', 'Financial Analysis', 'Investment Management'],
// 			gender: 'Pria',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/alex-johnson',
// 			portofolio: 'https://alexjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/64.jpg',
// 			about:
// 				'I am a finance professional with expertise in financial analysis and investment management.',
// 			experiences: [
// 				{
// 					jobTitle: 'Financial Analyst',
// 					company: 'Investment Bank X',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Investment Manager',
// 					company: 'Asset Management Firm Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Finance',
// 					name: 'Financial Analysis Masterclass',
// 					description:
// 						'Master financial analysis techniques for investment decisions and risk management.',
// 					terms: [
// 						'Basic understanding of finance concepts required.',
// 						'Participants will learn about financial statement analysis, valuation methods, and portfolio management.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Financial Statement Analysis',
// 						description:
// 							'Learn how to analyze financial statements and evaluate the financial performance of companies.',
// 						dateTime: '2024-05-15T00:00:00Z',
// 						startTime: '2024-05-15T10:00:00Z',
// 						endTime: '2024-05-15T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Finance',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'sophia_finance@example.com',
// 			name: 'Sophia Brown',
// 			skills: ['Finance', 'Corporate Finance', 'Financial Modeling'],
// 			gender: 'Wanita',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/sophia-brown',
// 			portofolio: 'https://sophiabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/62.jpg',
// 			about: 'I am a finance professional specialized in corporate finance and financial modeling.',
// 			experiences: [
// 				{
// 					jobTitle: 'Corporate Finance Manager',
// 					company: 'Fortune 500 Company Z',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Financial Analyst',
// 					company: 'Financial Advisory Firm A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Finance',
// 					name: 'Corporate Finance Fundamentals',
// 					description:
// 						'Learn essential concepts of corporate finance including financial planning, capital budgeting, and risk management.',
// 					terms: [
// 						'Basic understanding of finance principles required.',
// 						'Participants will learn about financial statements, capital structure, and financial decision-making.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Capital Budgeting Techniques',
// 						description:
// 							'Learn how to evaluate investment projects and make capital budgeting decisions for companies.',
// 						dateTime: '2024-05-20T00:00:00Z',
// 						startTime: '2024-05-20T10:00:00Z',
// 						endTime: '2024-05-20T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Finance',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'michael_finance@example.com',
// 			name: 'Michael Wilson',
// 			skills: ['Finance', 'Investment Banking', 'Mergers and Acquisitions'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/michael-wilson',
// 			portofolio: 'https://michaelwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/65.jpg',
// 			about:
// 				'I am a finance professional with experience in investment banking and mergers and acquisitions.',
// 			experiences: [
// 				{
// 					jobTitle: 'Investment Banker',
// 					company: 'Investment Banking Firm B',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'M&A Analyst',
// 					company: 'M&A Advisory Firm C',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Finance',
// 					name: 'Investment Banking Essentials',
// 					description:
// 						'Learn fundamentals of investment banking including financial analysis, valuation, and deal structuring.',
// 					terms: [
// 						'Basic understanding of finance and accounting required.',
// 						'Participants will learn about capital markets, financial modeling, and transaction execution.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Financial Modeling for Investment Banking',
// 						description:
// 							'Learn how to build financial models and perform valuation analysis for investment banking transactions.',
// 						dateTime: '2024-05-25T00:00:00Z',
// 						startTime: '2024-05-25T10:00:00Z',
// 						endTime: '2024-05-25T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Finance',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'olivia_finance@example.com',
// 			name: 'Olivia Smith',
// 			skills: ['Finance', 'Risk Management', 'Financial Planning'],
// 			gender: 'Wanita',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/olivia-smith',
// 			portofolio: 'https://oliviasmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/63.jpg',
// 			about:
// 				'I am a finance professional specializing in risk management and financial planning strategies.',
// 			experiences: [
// 				{
// 					jobTitle: 'Risk Manager',
// 					company: 'Financial Services Company D',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Financial Planner',
// 					company: 'Wealth Management Firm E',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Finance',
// 					name: 'Risk Management Fundamentals',
// 					description: 'Learn principles and techniques of risk management in finance.',
// 					terms: [
// 						'Basic understanding of finance concepts required.',
// 						'Participants will learn about risk identification, assessment, and mitigation strategies.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Financial Planning Strategies',
// 						description:
// 							'Learn how to develop financial plans and investment strategies for individuals and businesses.',
// 						dateTime: '2024-05-30T00:00:00Z',
// 						startTime: '2024-05-30T10:00:00Z',
// 						endTime: '2024-05-30T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Finance',
// 					},
// 				],
// 			},
// 		},

// 		// Mentor Karier, Kategori: Marketing
// 		{
// 			userType: 'Mentor',
// 			email: 'jennifer_marketing@example.com',
// 			name: 'Jennifer Johnson',
// 			skills: ['Marketing', 'Digital Marketing', 'Social Media Marketing'],
// 			gender: 'Wanita',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/jennifer-johnson',
// 			portofolio: 'https://jenniferjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/64.jpg',
// 			about:
// 				'I am a marketing professional with expertise in digital marketing and social media strategies.',
// 			experiences: [
// 				{
// 					jobTitle: 'Digital Marketing Manager',
// 					company: 'Marketing Agency X',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Social Media Specialist',
// 					company: 'Social Media Company Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Marketing',
// 					name: 'Digital Marketing Masterclass',
// 					description:
// 						'Master digital marketing strategies including SEO, SEM, and social media marketing.',
// 					terms: [
// 						'No prior knowledge of marketing required.',
// 						'Participants will learn about online advertising, content marketing, and campaign optimization.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Social Media Marketing Strategies',
// 						description:
// 							'Learn how to develop social media marketing strategies and create engaging content for social platforms.',
// 						dateTime: '2024-06-05T00:00:00Z',
// 						startTime: '2024-06-05T10:00:00Z',
// 						endTime: '2024-06-05T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Marketing',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'michael_marketing@example.com',
// 			name: 'Michael Smith',
// 			skills: ['Marketing', 'Content Marketing', 'Email Marketing'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/michael-smith',
// 			portofolio: 'https://michaelsmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/66.jpg',
// 			about:
// 				'I am a marketing professional specializing in content marketing and email marketing strategies.',
// 			experiences: [
// 				{
// 					jobTitle: 'Content Marketing Manager',
// 					company: 'Content Agency Z',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Email Marketing Specialist',
// 					company: 'Email Marketing Firm A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Marketing',
// 					name: 'Content Marketing Essentials',
// 					description: 'Learn essential concepts and techniques of content marketing.',
// 					terms: [
// 						'No prior knowledge of marketing required.',
// 						'Participants will learn about content strategy, creation, distribution, and measurement.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Email Marketing Campaigns',
// 						description:
// 							'Learn how to plan and execute effective email marketing campaigns to drive engagement and conversions.',
// 						dateTime: '2024-06-10T00:00:00Z',
// 						startTime: '2024-06-10T10:00:00Z',
// 						endTime: '2024-06-10T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Marketing',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_marketing@example.com',
// 			name: 'David Wilson',
// 			skills: ['Marketing', 'Brand Management', 'Marketing Analytics'],
// 			gender: 'Pria',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/david-wilson',
// 			portofolio: 'https://davidwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/67.jpg',
// 			about:
// 				'I am a marketing professional experienced in brand management and marketing analytics.',
// 			experiences: [
// 				{
// 					jobTitle: 'Brand Manager',
// 					company: 'Consumer Goods Company B',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Marketing Analyst',
// 					company: 'Marketing Analytics Firm C',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Marketing',
// 					name: 'Brand Management Fundamentals',
// 					description:
// 						'Learn fundamentals of brand management including brand positioning, identity, and communication.',
// 					terms: [
// 						'No prior knowledge of marketing required.',
// 						'Participants will learn about brand strategy, development, and measurement.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Marketing Analytics Techniques',
// 						description:
// 							'Learn how to use marketing analytics to measure and optimize marketing performance.',
// 						dateTime: '2024-06-15T00:00:00Z',
// 						startTime: '2024-06-15T10:00:00Z',
// 						endTime: '2024-06-15T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Marketing',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emma_marketing@example.com',
// 			name: 'Emma Brown',
// 			skills: ['Marketing', 'Market Research', 'Consumer Behavior'],
// 			gender: 'Wanita',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/emma-brown',
// 			portofolio: 'https://emmabrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/65.jpg',
// 			about:
// 				'I am a marketing professional specialized in market research and consumer behavior analysis.',
// 			experiences: [
// 				{
// 					jobTitle: 'Market Research Analyst',
// 					company: 'Market Research Company D',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Consumer Insights Specialist',
// 					company: 'Consumer Insights Firm E',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Marketing',
// 					name: 'Market Research Essentials',
// 					description:
// 						'Learn essentials of market research including research design, data collection, and analysis.',
// 					terms: [
// 						'No prior knowledge of marketing required.',
// 						'Participants will learn about qualitative and quantitative research methods, and consumer behavior analysis.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Consumer Behavior Analysis',
// 						description:
// 							'Learn how to analyze consumer behavior and develop marketing strategies based on consumer insights.',
// 						dateTime: '2024-06-20T00:00:00Z',
// 						startTime: '2024-06-20T10:00:00Z',
// 						endTime: '2024-06-20T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Marketing',
// 					},
// 				],
// 			},
// 		},

// 		// Mentor Karier, Kategori: Quality Assurance
// 		{
// 			userType: 'Mentor',
// 			email: 'john_qa@example.com',
// 			name: 'John Johnson',
// 			skills: ['Quality Assurance', 'Software Testing', 'Test Automation'],
// 			gender: 'Pria',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/john-johnson',
// 			portofolio: 'https://johnjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/68.jpg',
// 			about:
// 				'I am a quality assurance professional with expertise in software testing and test automation.',
// 			experiences: [
// 				{
// 					jobTitle: 'QA Manager',
// 					company: 'Software Company X',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Test Automation Engineer',
// 					company: 'Tech Firm Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Quality Assurance',
// 					name: 'Software Testing Fundamentals',
// 					description:
// 						'Learn fundamentals of software testing including test planning, execution, and reporting.',
// 					terms: [
// 						'No prior knowledge of quality assurance required.',
// 						'Participants will learn about testing techniques, types of testing, and test automation tools.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Test Automation with Selenium',
// 						description:
// 							'Learn how to automate web application testing using Selenium WebDriver and Java programming.',
// 						dateTime: '2024-06-25T00:00:00Z',
// 						startTime: '2024-06-25T10:00:00Z',
// 						endTime: '2024-06-25T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Quality Assurance',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'mary_qa@example.com',
// 			name: 'Mary Smith',
// 			skills: ['Quality Assurance', 'Manual Testing', 'Bug Tracking'],
// 			gender: 'Wanita',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/mary-smith',
// 			portofolio: 'https://marysmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/69.jpg',
// 			about:
// 				'I am a quality assurance professional specialized in manual testing and bug tracking.',
// 			experiences: [
// 				{
// 					jobTitle: 'QA Lead',
// 					company: 'Software Development Company Z',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Manual Tester',
// 					company: 'Software Testing Firm A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Quality Assurance',
// 					name: 'Manual Testing Essentials',
// 					description:
// 						'Learn essentials of manual testing including test case design, execution, and defect management.',
// 					terms: [
// 						'No prior knowledge of quality assurance required.',
// 						'Participants will learn about testing methodologies, bug tracking tools, and best practices.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Test Case Design Techniques',
// 						description:
// 							'Learn how to design effective test cases and execute them to ensure software quality.',
// 						dateTime: '2024-06-30T00:00:00Z',
// 						startTime: '2024-06-30T10:00:00Z',
// 						endTime: '2024-06-30T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Quality Assurance',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emma_qa@example.com',
// 			name: 'Emma Wilson',
// 			skills: ['Quality Assurance', 'Agile Testing', 'Continuous Integration'],
// 			gender: 'Wanita',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/emma-wilson',
// 			portofolio: 'https://emmawilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/66.jpg',
// 			about:
// 				'I am a quality assurance professional experienced in agile testing and continuous integration.',
// 			experiences: [
// 				{
// 					jobTitle: 'QA Engineer',
// 					company: 'Technology Startup B',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Agile Tester',
// 					company: 'Agile Development Team C',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Quality Assurance',
// 					name: 'Agile Testing Fundamentals',
// 					description:
// 						'Learn fundamentals of agile testing including sprint testing, test automation, and CI/CD pipelines.',
// 					terms: [
// 						'Basic understanding of software development and testing concepts required.',
// 						'Participants will learn about agile principles, testing in scrum teams, and continuous integration practices.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Continuous Integration with Jenkins',
// 						description:
// 							'Learn how to set up and configure continuous integration pipelines using Jenkins and automate testing.',
// 						dateTime: '2024-07-05T00:00:00Z',
// 						startTime: '2024-07-05T10:00:00Z',
// 						endTime: '2024-07-05T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Quality Assurance',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_qa@example.com',
// 			name: 'David Brown',
// 			skills: ['Quality Assurance', 'Performance Testing', 'Security Testing'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/david-brown',
// 			portofolio: 'https://davidbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/70.jpg',
// 			about:
// 				'I am a quality assurance professional specialized in performance testing and security testing.',
// 			experiences: [
// 				{
// 					jobTitle: 'QA Specialist',
// 					company: 'Security Software Company D',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Performance Tester',
// 					company: 'Performance Testing Team E',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Quality Assurance',
// 					name: 'Performance Testing Masterclass',
// 					description:
// 						'Master performance testing techniques including load testing, stress testing, and security testing.',
// 					terms: [
// 						'Basic understanding of quality assurance and testing concepts required.',
// 						'Participants will learn about performance testing tools, methodologies, and best practices.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Security Testing Techniques',
// 						description:
// 							'Learn how to perform security testing and identify vulnerabilities in software applications.',
// 						dateTime: '2024-07-10T00:00:00Z',
// 						startTime: '2024-07-10T10:00:00Z',
// 						endTime: '2024-07-10T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Quality Assurance',
// 					},
// 				],
// 			},
// 		},

// 		// Mentor Karier, Kategori: Security Engineer
// 		{
// 			userType: 'Mentor',
// 			email: 'john_security@example.com',
// 			name: 'John Johnson',
// 			skills: ['Security Engineering', 'Penetration Testing', 'Security Protocols'],
// 			gender: 'Pria',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/john-johnson',
// 			portofolio: 'https://johnjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/71.jpg',
// 			about:
// 				'I am a security engineer with expertise in penetration testing and implementing security protocols.',
// 			experiences: [
// 				{
// 					jobTitle: 'Security Engineer',
// 					company: 'Tech Company X',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Penetration Tester',
// 					company: 'Security Firm Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Security Engineer',
// 					name: 'Penetration Testing Masterclass',
// 					description:
// 						'Master penetration testing techniques including ethical hacking, vulnerability assessment, and exploit development.',
// 					terms: [
// 						'Basic understanding of cybersecurity concepts required.',
// 						'Participants will learn about penetration testing methodologies, tools, and reporting.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Ethical Hacking Fundamentals',
// 						description:
// 							'Learn how to perform ethical hacking and identify security vulnerabilities in computer systems.',
// 						dateTime: '2024-07-15T00:00:00Z',
// 						startTime: '2024-07-15T10:00:00Z',
// 						endTime: '2024-07-15T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Security Engineer',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'mary_security@example.com',
// 			name: 'Mary Smith',
// 			skills: ['Security Engineering', 'Network Security', 'Incident Response'],
// 			gender: 'Wanita',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/mary-smith',
// 			portofolio: 'https://marysmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/67.jpg',
// 			about: 'I am a security engineer specialized in network security and incident response.',
// 			experiences: [
// 				{
// 					jobTitle: 'Security Analyst',
// 					company: 'Security Firm Z',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Incident Responder',
// 					company: 'Incident Response Team A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Security Engineer',
// 					name: 'Network Security Fundamentals',
// 					description:
// 						'Learn fundamentals of network security including secure architecture, firewall configuration, and intrusion detection.',
// 					terms: [
// 						'Basic understanding of cybersecurity concepts required.',
// 						'Participants will learn about network security principles, common attacks, and defense mechanisms.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Firewall Configuration Techniques',
// 						description:
// 							'Learn how to configure firewalls and implement network security policies to protect against cyber threats.',
// 						dateTime: '2024-07-20T00:00:00Z',
// 						startTime: '2024-07-20T10:00:00Z',
// 						endTime: '2024-07-20T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Security Engineer',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emma_security@example.com',
// 			name: 'Emma Wilson',
// 			skills: ['Security Engineering', 'Cloud Security', 'Identity Management'],
// 			gender: 'Wanita',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/emma-wilson',
// 			portofolio: 'https://emmawilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/68.jpg',
// 			about: 'I am a security engineer experienced in cloud security and identity management.',
// 			experiences: [
// 				{
// 					jobTitle: 'Security Architect',
// 					company: 'Cloud Services Company B',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Identity Access Manager',
// 					company: 'Identity Management Firm C',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Security Engineer',
// 					name: 'Cloud Security Essentials',
// 					description:
// 						'Learn essentials of cloud security including identity and access management, encryption, and compliance.',
// 					terms: [
// 						'Basic understanding of cybersecurity concepts required.',
// 						'Participants will learn about cloud security principles, best practices, and compliance frameworks.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Identity and Access Management',
// 						description:
// 							'Learn how to manage user identities and access permissions in cloud environments to ensure security.',
// 						dateTime: '2024-07-25T00:00:00Z',
// 						startTime: '2024-07-25T10:00:00Z',
// 						endTime: '2024-07-25T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Security Engineer',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'david_security@example.com',
// 			name: 'David Brown',
// 			skills: ['Security Engineering', 'Web Application Security', 'Security Compliance'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/david-brown',
// 			portofolio: 'https://davidbrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/72.jpg',
// 			about:
// 				'I am a security engineer specialized in web application security and security compliance.',
// 			experiences: [
// 				{
// 					jobTitle: 'Security Consultant',
// 					company: 'Security Consulting Firm D',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Web Security Specialist',
// 					company: 'Web Security Company E',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Security Engineer',
// 					name: 'Web Application Security Masterclass',
// 					description:
// 						'Master web application security techniques including secure coding practices, vulnerability scanning, and OWASP top 10.',
// 					terms: [
// 						'Basic understanding of cybersecurity concepts and web development required.',
// 						'Participants will learn about common web vulnerabilities, security testing tools, and mitigation strategies.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Security Compliance Frameworks',
// 						description:
// 							'Learn about security compliance frameworks and how to implement them to meet regulatory requirements.',
// 						dateTime: '2024-07-30T00:00:00Z',
// 						startTime: '2024-07-30T10:00:00Z',
// 						endTime: '2024-07-30T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Security Engineer',
// 					},
// 				],
// 			},
// 		},

// 		// Mentor Karier, Kategori: Desain
// 		{
// 			userType: 'Mentor',
// 			email: 'sarah_design@example.com',
// 			name: 'Sarah Johnson',
// 			skills: ['Design', 'Graphic Design', 'UI/UX Design'],
// 			gender: 'Wanita',
// 			location: 'New York',
// 			linkedin: 'https://www.linkedin.com/in/sarah-johnson',
// 			portofolio: 'https://sarahjohnson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/69.jpg',
// 			about: 'I am a design professional with expertise in graphic design and UI/UX design.',
// 			experiences: [
// 				{
// 					jobTitle: 'Senior Graphic Designer',
// 					company: 'Design Agency X',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'UI/UX Designer',
// 					company: 'Tech Startup Y',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Desain',
// 					name: 'Graphic Design Fundamentals',
// 					description:
// 						'Learn fundamentals of graphic design including typography, layout, and color theory.',
// 					terms: [
// 						'No prior knowledge of design required.',
// 						'Participants will learn about design principles, tools, and industry-standard software.',
// 					],
// 					price: 300,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'UI/UX Design Principles',
// 						description:
// 							'Learn about user interface and user experience design principles and best practices for web and mobile applications.',
// 						dateTime: '2024-08-05T00:00:00Z',
// 						startTime: '2024-08-05T10:00:00Z',
// 						endTime: '2024-08-05T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Desain',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'mark_design@example.com',
// 			name: 'Mark Smith',
// 			skills: ['Design', 'Web Design', 'Product Design'],
// 			gender: 'Pria',
// 			location: 'Los Angeles',
// 			linkedin: 'https://www.linkedin.com/in/mark-smith',
// 			portofolio: 'https://marksmith.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/73.jpg',
// 			about: 'I am a design professional specialized in web design and product design.',
// 			experiences: [
// 				{
// 					jobTitle: 'Lead Web Designer',
// 					company: 'Web Design Firm Z',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Product Designer',
// 					company: 'Product Design Company A',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Desain',
// 					name: 'Web Design Essentials',
// 					description:
// 						'Learn essentials of web design including HTML, CSS, responsive design, and user experience.',
// 					terms: [
// 						'Basic understanding of design principles recommended.',
// 						'Participants will learn about web design fundamentals, user interface design, and usability testing.',
// 					],
// 					price: 280,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Product Design Process',
// 						description:
// 							'Learn about the product design process and how to create innovative and user-friendly products.',
// 						dateTime: '2024-08-10T00:00:00Z',
// 						startTime: '2024-08-10T10:00:00Z',
// 						endTime: '2024-08-10T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Desain',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'jason_design@example.com',
// 			name: 'Jason Wilson',
// 			skills: ['Design', 'Motion Graphics', 'Animation'],
// 			gender: 'Pria',
// 			location: 'Chicago',
// 			linkedin: 'https://www.linkedin.com/in/jason-wilson',
// 			portofolio: 'https://jasonwilson.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
// 			about: 'I am a design professional experienced in motion graphics and animation.',
// 			experiences: [
// 				{
// 					jobTitle: 'Motion Graphics Designer',
// 					company: 'Animation Studio B',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Animator',
// 					company: 'Animation Company C',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Desain',
// 					name: 'Motion Graphics Masterclass',
// 					description:
// 						'Master motion graphics techniques including animation principles, visual effects, and storytelling.',
// 					terms: [
// 						'No prior knowledge of design required.',
// 						'Participants will learn about motion design fundamentals, software tools, and industry best practices.',
// 					],
// 					price: 320,
// 					// 45,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Animation Principles',
// 						description:
// 							'Learn about animation principles and techniques to create compelling and engaging visual stories.',
// 						dateTime: '2024-08-15T00:00:00Z',
// 						startTime: '2024-08-15T10:00:00Z',
// 						endTime: '2024-08-15T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Desain',
// 					},
// 				],
// 			},
// 		},
// 		{
// 			userType: 'Mentor',
// 			email: 'emily_design@example.com',
// 			name: 'Emily Brown',
// 			skills: ['Design', 'Illustration', 'Brand Identity'],
// 			gender: 'Wanita',
// 			location: 'San Francisco',
// 			linkedin: 'https://www.linkedin.com/in/emily-brown',
// 			portofolio: 'https://emilybrown.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/70.jpg',
// 			about: 'I am a design professional specialized in illustration and brand identity.',
// 			experiences: [
// 				{
// 					jobTitle: 'Illustrator',
// 					company: 'Illustration Studio D',
// 					isCurrentJob: true,
// 				},
// 				{
// 					jobTitle: 'Brand Designer',
// 					company: 'Brand Design Agency E',
// 					isCurrentJob: false,
// 				},
// 			],
// 			class: {
// 				create: {
// 					educationLevel: 'Karier',
// 					category: 'Desain',
// 					name: 'Illustration Fundamentals',
// 					description:
// 						'Learn fundamentals of illustration including drawing techniques, digital illustration, and vector graphics.',
// 					terms: [
// 						'No prior knowledge of design required.',
// 						'Participants will learn about illustration tools, composition, and color theory.',
// 					],
// 					price: 300,
// 					// 60,
// 					isVerified: true,
// 					durationInDays: 30,
// 					location: 'Online',
// 					startDate: '2024-08-25T10:00:00.000Z',
// 					endDate: '2024-09-25T13:00:00.000Z',
// 					schedule: 'Senin-Jumat',
// 					maxParticipants: 5,
// 				},
// 			},

// 			session: {
// 				create: [
// 					{
// 						title: 'Brand Identity Design',
// 						description:
// 							'Learn how to create brand identity systems and design visual elements for brand communication.',
// 						dateTime: '2024-08-20T00:00:00Z',
// 						startTime: '2024-08-20T10:00:00Z',
// 						endTime: '2024-08-20T13:00:00Z',
// 						maxParticipants: 20,
// 						category: 'Desain',
// 					},
// 				],
// 			},
// 		},
// 	];

// 	for (const user of users) {
// 		const existingUser = await prisma.user.findUnique({
// 			where: { email: user.email },
// 		});

// 		if (!existingUser) {
// 			await prisma.user.create({
// 				data: {
// 					userType: user.userType,
// 					email: user.email,
// 					name: user.name,
// 					skills: { set: user.skills },
// 					gender: user.gender,
// 					location: user.location,
// 					linkedin: user.linkedin,
// 					portofolio: user.portofolio,
// 					photoUrl: user.photoUrl,
// 					about: user.about,
// 					experiences: {
// 						create: user.experiences,
// 					},
// 					class: user.class,
// 					session: user.session,
// 				},
// 			});
// 		} else {
// 			console.log(`User with email ${user.email} already exists. Skipping...`);
// 			// Atau update pengguna yang sudah ada, tergantung kebutuhan kamu.
// 		}
// 	}
// }

// // seed mentee
// async function mainMentee() {
// 	const users = [
// 		{
// 			userType: 'Mentee',
// 			name: 'Anita Dewi',
// 			email: 'anita_dewi@example.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/1.jpg',
// 			skills: ['Marketing', 'Social Media Management', 'Graphic Design'],
// 			location: 'Jakarta',
// 			linkedin: 'https://www.linkedin.com/in/anita-dewi',
// 			about:
// 				'Saya seorang mahasiswa yang memiliki minat dalam pemasaran digital dan manajemen media sosial.',
// 			experiences: [
// 				{
// 					jobTitle: 'Marketing Intern',
// 					company: 'Startup ABC',
// 					isCurrentJob: true,
// 				},
// 			],
// 		},
// 		{
// 			userType: 'Mentee',
// 			name: 'Budi Santoso',
// 			email: 'budi_santoso@example.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg',
// 			skills: ['Web Development', 'Mobile App Development', 'UI/UX Design'],
// 			location: 'Surabaya',
// 			linkedin: 'https://www.linkedin.com/in/budi-santoso',
// 			about: 'Saya seorang pelajar yang tertarik dalam pengembangan web dan aplikasi mobile.',
// 			experiences: [
// 				{
// 					jobTitle: 'Web Development Intern',
// 					company: 'Tech Company XYZ',
// 					isCurrentJob: true,
// 				},
// 			],
// 		},
// 		{
// 			userType: 'Mentee',
// 			name: 'Citra Wijaya',
// 			email: 'citra_wijaya@example.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/2.jpg',
// 			skills: ['Data Analysis', 'Machine Learning', 'Python Programming'],
// 			location: 'Bandung',
// 			linkedin: 'https://www.linkedin.com/in/citra-wijaya',
// 			about: 'Saya seorang mahasiswa yang tertarik dalam analisis data dan pemrograman Python.',
// 			experiences: [
// 				{
// 					jobTitle: 'Data Analyst Intern',
// 					company: 'Analytics Firm A',
// 					isCurrentJob: false,
// 				},
// 			],
// 		},
// 		{
// 			userType: 'Mentee',
// 			name: 'Dharma Putra',
// 			email: 'dharma_putra@example.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
// 			skills: ['Content Writing', 'Copywriting', 'SEO'],
// 			location: 'Yogyakarta',
// 			linkedin: 'https://www.linkedin.com/in/dharma-putra',
// 			about:
// 				'Saya seorang pelajar yang berminat dalam penulisan konten dan optimasi mesin pencari.',
// 			experiences: [
// 				{
// 					jobTitle: 'Content Writer Intern',
// 					company: 'Content Agency B',
// 					isCurrentJob: true,
// 				},
// 			],
// 		},
// 		{
// 			userType: 'Mentee',
// 			name: 'Eka Suryadi',
// 			email: 'eka_suryadi@example.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
// 			skills: ['Finance', 'Accounting', 'Investment Analysis'],
// 			location: 'Semarang',
// 			linkedin: 'https://www.linkedin.com/in/eka-suryadi',
// 			about: 'Saya seorang mahasiswa yang tertarik dalam bidang keuangan dan analisis investasi.',
// 			experiences: [
// 				{
// 					jobTitle: 'Finance Intern',
// 					company: 'Finance Firm C',
// 					isCurrentJob: false,
// 				},
// 			],
// 		},
// 		{
// 			userType: 'Mentee',
// 			name: 'Fitriani Utami',
// 			email: 'fitriani_utami@example.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/3.jpg',
// 			skills: ['UI/UX Design', 'Prototyping', 'User Research'],
// 			location: 'Malang',
// 			linkedin: 'https://www.linkedin.com/in/fitriani-utami',
// 			about:
// 				'Saya seorang mahasiswa yang memiliki minat dalam desain UI/UX dan penelitian pengguna.',
// 			experiences: [
// 				{
// 					jobTitle: 'UI/UX Design Intern',
// 					company: 'Design Studio D',
// 					isCurrentJob: true,
// 				},
// 			],
// 		},
// 		{
// 			userType: 'Mentee',
// 			name: 'Gita Pratiwi',
// 			email: 'gita_pratiwi@example.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
// 			skills: ['Digital Marketing', 'Email Marketing', 'Social Media Advertising'],
// 			location: 'Depok',
// 			linkedin: 'https://www.linkedin.com/in/gita-pratiwi',
// 			about: 'Saya seorang mahasiswa yang tertarik dalam pemasaran digital dan iklan media sosial.',
// 			experiences: [
// 				{
// 					jobTitle: 'Digital Marketing Intern',
// 					company: 'Marketing Agency E',
// 					isCurrentJob: false,
// 				},
// 			],
// 		},
// 		{
// 			userType: 'Mentee',
// 			name: 'Hadi Susanto',
// 			email: 'hadi_susanto@example.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/4.jpg',
// 			skills: ['Data Science', 'Statistical Analysis', 'Data Visualization'],
// 			location: 'Makassar',
// 			linkedin: 'https://www.linkedin.com/in/hadi-susanto',
// 			about: 'Saya seorang mahasiswa yang memiliki minat dalam ilmu data dan analisis statistik.',
// 			experiences: [
// 				{
// 					jobTitle: 'Data Science Intern',
// 					company: 'Data Analytics Firm F',
// 					isCurrentJob: true,
// 				},
// 			],
// 		},
// 		{
// 			userType: 'Mentee',
// 			name: 'Indah Permata',
// 			email: 'indah_permata@example.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/5.jpg',
// 			skills: ['Content Strategy', 'Content Marketing', 'SEO'],
// 			location: 'Medan',
// 			linkedin: 'https://www.linkedin.com/in/indah-permata',
// 			about:
// 				'Saya seorang mahasiswa yang tertarik dalam strategi konten, pemasaran konten, dan SEO.',
// 			experiences: [
// 				{
// 					jobTitle: 'Content Strategy Intern',
// 					company: 'Content Agency G',
// 					isCurrentJob: false,
// 				},
// 			],
// 		},
// 		{
// 			userType: 'Mentee',
// 			name: 'Joko Wijaya',
// 			email: 'joko_wijaya@example.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/5.jpg',
// 			skills: ['Software Development', 'Database Management', 'Cloud Computing'],
// 			location: 'Palembang',
// 			linkedin: 'https://www.linkedin.com/in/joko-wijaya',
// 			about:
// 				'Saya seorang pelajar yang berminat dalam pengembangan perangkat lunak, manajemen basis data, dan komputasi awan.',
// 			experiences: [
// 				{
// 					jobTitle: 'Software Development Intern',
// 					company: 'Tech Startup H',
// 					isCurrentJob: true,
// 				},
// 			],
// 		},
// 		{
// 			userType: 'Mentee',
// 			name: 'Kartika Dewi',
// 			email: 'kartika_dewi@example.com',
// 			photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/6.jpg',
// 			skills: ['Business Analysis', 'Project Management', 'Agile Methodology'],
// 			location: 'Bandar Lampung',
// 			linkedin: 'https://www.linkedin.com/in/kartika-dewi',
// 			about:
// 				'Saya seorang mahasiswa yang tertarik dalam analisis bisnis, manajemen proyek, dan metodologi Agile.',
// 			experiences: [
// 				{
// 					jobTitle: 'Business Analyst Intern',
// 					company: 'Consulting Firm I',
// 					isCurrentJob: false,
// 				},
// 			],
// 		},
// 	];

// 	for (const user of users) {
// 		const existingUser = await prisma.user.findUnique({
// 			where: { email: user.email },
// 		});

// 		if (!existingUser) {
// 			await prisma.user.create({
// 				data: {
// 					userType: user.userType,
// 					email: user.email,
// 					name: user.name,
// 					photoUrl: user.photoUrl,
// 					skills: { set: user.skills },
// 					location: user.location,
// 					about: user.about,
// 					experiences: {
// 						create: user.experiences,
// 					},
// 				},
// 			});
// 		} else {
// 			console.log(`User with email ${user.email} already exists. Skipping...`);
// 			// Atau update user yang sudah ada, tergantung kebutuhan kamu.
// 		}
// 	}
// }

// // seed community
// async function mainCommunity() {
// 	const communities = [
// 		{
// 			adminId: '006f7370-085d-4e29-8c42-7efb80c0f4b8',
// 			name: 'ReactCatalyst Developers',
// 			link: 'https://t.me/+4cUVixjHK9ZmYzNl',
// 			imageUrl: 'https://i.ibb.co/PDvmdy2/image-21-2.png',
// 		},
// 		{
// 			adminId: '006f7370-085d-4e29-8c42-7efb80c0f4b8',
// 			name: 'HTMLCSSInnovate Network',
// 			link: 'https://t.me/+MOhe46WsSndkZWM9',
// 			imageUrl: 'https://i.ibb.co/4YS10rD/image-21-1.png',
// 		},
// 		{
// 			adminId: '006f7370-085d-4e29-8c42-7efb80c0f4b8',
// 			name: 'Python.org  Forum',
// 			link: 'https://t.me/+enkPS0sLHHA2YmZl',
// 			imageUrl: 'https://i.ibb.co/rb5v52J/pexels-moose-photos-1587009-2.png',
// 		},
// 		{
// 			adminId: '006f7370-085d-4e29-8c42-7efb80c0f4b8',
// 			name: 'KotlinKoders Community',
// 			link: 'https://t.me/+B3GjkrTYdWBmYTA1',
// 			imageUrl: 'https://i.ibb.co/k2NkFgR/image.png',
// 		},
// 		{
// 			adminId: '006f7370-085d-4e29-8c42-7efb80c0f4b8',
// 			name: 'FlutterXperience Community',
// 			link: 'https://t.me/+P70xd4PMXbg1M2E1',
// 			imageUrl: 'https://i.ibb.co/jfX4r7Q/image-21.png',
// 		},
// 		{
// 			adminId: '006f7370-085d-4e29-8c42-7efb80c0f4b8',
// 			name: 'UXElevation  Network',
// 			link: 'https://t.me/+wfQ3HPJpr0k0NjY1',
// 			imageUrl: 'https://i.ibb.co/MPZsjk8/image-22.png',
// 		},
// 	];

// 	for (const community of communities) {
// 		await prisma.community.create({
// 			data: {
// 				adminId: community.adminId,
// 				name: community.name,
// 				link: community.link,
// 				imageUrl: community.imageUrl,
// 			},
// 		});
// 		console.log(`Community with name ${community.name} already exists. Skipping...`);
// 		// Atau update community yang sudah ada, tergantung kebutuhan kamu.
// 	}
// }

// console.log('Seeding data...');
// main()
// 	.then(async () => {
// 		console.log('Seeding finished.');
// 		await prisma.$disconnect();
// 	})
// 	.catch(async (e) => {
// 		console.error(e);
// 		await prisma.$disconnect();
// 		process.exit(1);
// 	});

const { PrismaClient, UserType, Gender } = require('@prisma/client');
const fs = require('fs');
const csv = require('csv-parser');

const prisma = new PrismaClient();

async function main() {
	const results = [];
	fs.createReadStream('/Users/jeremylewi/Desktop/Backend/users_rows (1).csv')
		.pipe(csv())
		.on('data', (data) => results.push(data))
		.on('end', async () => {
			for (const item of results) {
				await prisma.user.create({
					data: {
						id: item.id,
						userType: item.userType ? UserType[item.userType.toUpperCase()] : null,
						email: item.email,
						name: item.name,
						skills: item.skills.split(','), // Assuming skills are comma-separated in CSV
						gender: item.gender ? Gender[item.gender.toUpperCase()] : null,
						location: item.location,
						linkedin: item.linkedin,
						portofolio: item.portofolio,
						photoUrl: item.photoUrl,
						about: item.about,
						accountNumber: item.accountNumber,
						accountName: item.accountName,
						rejectReason: item.rejectReason,
						fcmToken: item.fcmToken,
					},
				});
			}
			console.log('Data seeded successfully');
			await prisma.$disconnect();
		});
}

main().catch((e) => {
	console.error(e);
	prisma.$disconnect();
});
