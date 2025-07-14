import { prisma } from './prisma'
import { TASK_CATEGORIES } from './constants'

export async function seedDatabase() {
  console.log('Starting database seeding...')

  try {
    // Clear existing categories
    await prisma.category.deleteMany()

    // Create categories
    const categories = await Promise.all(
      TASK_CATEGORIES.map((category) =>
        prisma.category.create({
          data: {
            id: category.id,
            name: category.name,
            nameNl: category.nameNl,
            description: category.description,
            descriptionNl: category.descriptionNl,
            icon: category.icon,
            color: category.color,
            isActive: true,
          },
        })
      )
    )

    console.log(`Created ${categories.length} categories`)

    // Create a sample user for development
    const sampleUser = await prisma.user.upsert({
      where: { email: 'demo@tasksy.com' },
      update: {},
      create: {
        email: 'demo@tasksy.com',
        name: 'Demo User',
        bio: 'I am a demo user for testing Tasksy features',
        city: 'Amsterdam',
        region: 'Noord-Holland',
        latitude: 52.3676,
        longitude: 4.9041,
        isVerified: true,
        isActive: true,
      },
    })

    console.log(`Created sample user: ${sampleUser.email}`)

    // Create some sample tasks
    const sampleTasks = await Promise.all([
      prisma.task.create({
        data: {
          title: 'Help with House Cleaning',
          description: 'I need help cleaning my 3-bedroom apartment. Looking for someone reliable and thorough.',
          categoryId: 'cleaning',
          creatorId: sampleUser.id,
          price: 75.0,
          currency: 'EUR',
          location: 'Amsterdam, Netherlands',
          latitude: 52.3676,
          longitude: 4.9041,
          isRemote: false,
          deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
          requirements: 'Please bring your own cleaning supplies. Apartment is on 2nd floor with no elevator.',
        },
      }),
      prisma.task.create({
        data: {
          title: 'Furniture Assembly - IKEA Wardrobe',
          description: 'Need help assembling a large IKEA wardrobe. All tools and instructions provided.',
          categoryId: 'handyman',
          creatorId: sampleUser.id,
          price: 50.0,
          currency: 'EUR',
          location: 'Utrecht, Netherlands',
          latitude: 52.0907,
          longitude: 5.1214,
          isRemote: false,
          estimatedHours: 3.0,
          requirements: 'Experience with furniture assembly preferred. Should take about 2-3 hours.',
        },
      }),
      prisma.task.create({
        data: {
          title: 'Dog Walking Services',
          description: 'Looking for someone to walk my friendly Golden Retriever twice a week.',
          categoryId: 'petcare',
          creatorId: sampleUser.id,
          price: 25.0,
          currency: 'EUR',
          location: 'The Hague, Netherlands',
          latitude: 52.0705,
          longitude: 4.3007,
          isRemote: false,
          requirements: 'Must love dogs and be comfortable handling large breeds.',
        },
      }),
    ])

    console.log(`Created ${sampleTasks.length} sample tasks`)

    console.log('Database seeding completed successfully!')
    return {
      categories: categories.length,
      users: 1,
      tasks: sampleTasks.length,
    }
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  }
}

// Run seeding if this file is executed directly
if (require.main === module) {
  seedDatabase()
    .then((result) => {
      console.log('Seeding result:', result)
      process.exit(0)
    })
    .catch((error) => {
      console.error('Seeding failed:', error)
      process.exit(1)
    })
}