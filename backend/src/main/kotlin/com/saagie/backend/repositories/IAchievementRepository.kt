package com.saagie.backend.repositories

import com.saagie.backend.models.Achievement
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

/**
 * Repository to access achievements.
 */
@Repository
interface IAchievementRepository : JpaRepository<Achievement, Long>
