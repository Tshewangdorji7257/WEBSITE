import { DataStore, Hub } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import DateFormat from '@/utils/dateFormat'
import PageLoader from './Loader/PageLoader'
import { PostAnnouncement } from '../models/index'
import SignUp from './SignUp'

const AnnouncementComponent: React.FC = () => {
  const [announcements, setAnnouncements] = useState<PostAnnouncement[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAnnouncementTitle, setSelectedAnnouncementTitle] = useState<
    string | null
  >(null)

  const fetchAnnouncements = async (): Promise<void> => {
    try {
      const announcementData = await DataStore.query(PostAnnouncement)
      const sortedData = announcementData.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0
        return dateB - dateA
      })
      setAnnouncements(sortedData)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching announcements:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    DataStore.start()
    fetchAnnouncements()

    const removeListener = Hub.listen('datastore', async (capsule) => {
      const { event } = capsule.payload
      if (event === 'ready') {
        fetchAnnouncements()
      }
    })

    return () => {
      removeListener()
    }
  }, [])

  const handleNextClick = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
  }

  const learnMoreClick = (): void => {
    const currentAnnouncement = announcements[currentIndex]
    if (
      (!currentAnnouncement.link && currentAnnouncement.isSignUp) ||
      (currentAnnouncement.link && currentAnnouncement.isSignUp)
    ) {
      setSelectedAnnouncementTitle(currentAnnouncement.title || '')
      setIsModalOpen(true)
    } else if (currentAnnouncement.link && !currentAnnouncement.isSignUp) {
      window.location.href = currentAnnouncement.link
    }
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  if (loading) {
    return <PageLoader />
  }

  return (
    <div className="relative">
      <div className="announcement-container absolute mb-2 inset-x-0 bottom-0 z-20 bg-gradient-to-r from-[#124143] to-[#5AC994] text-white p-3 shadow-lg">
        <div className="w-full max-w-container mx-auto p-2 flex justify-between items-center">
          <div>
            <span className="text-white font-semibold">Announcement</span>
            {announcements.length > 0 ? (
              <>
                <span className="text-white sm:text-[10px] md:text-[12px] text-sm font-light">
                  {' | '}
                  {DateFormat(
                    announcements[currentIndex].createdAt
                      ? announcements[currentIndex].createdAt!
                      : 'No date'
                  )}
                </span>

                <div className="mt-2 text-sm font-light">
                  {announcements[currentIndex].content || 'No content'}
                </div>
                {(announcements[currentIndex].link ||
                  announcements[currentIndex].isSignUp) && (
                  <button
                    className="mt-2 text-sm inline-block font-light text-white underline"
                    onClick={learnMoreClick}
                    type="button"
                  >
                    {announcements[currentIndex].isSignUp
                      ? 'Sign Up'
                      : 'Learn More'}
                  </button>
                )}
              </>
            ) : (
              <div className="text-sm font-light">
                No announcements available
              </div>
            )}
          </div>

          {announcements.length > 0 && (
            <div className="absolute right-0 top-0 bottom-0 bg-[#D5F6E1] opacity-56 shadow flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mt-2 h-full w-full">
                <div
                  className="text-lg cursor-pointer"
                  onClick={handleNextClick}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleNextClick()
                  }}
                  aria-label="Next announcement"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[30px] w-auto text-[#124143] hover:text-ndi-emrald"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-[#124143] text-sm">
                {currentIndex + 1}/{announcements.length}
              </span>
            </div>
          )}
        </div>
      </div>

      <SignUp
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        eventName={selectedAnnouncementTitle}
        openModal={openModal}
      />
    </div>
  )
}

export default AnnouncementComponent
