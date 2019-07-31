package com.saagie.backend.services

import com.nhaarman.mockitokotlin2.any
import com.nhaarman.mockitokotlin2.whenever
import com.saagie.backend.models.Achievement
import com.saagie.backend.models.AchievementDto
import com.saagie.backend.models.AchievementInput
import com.saagie.backend.repositories.IAchievementRepository
import org.junit.Assert.assertEquals
import org.junit.Assert.fail
import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.springframework.test.context.junit4.SpringRunner
import java.util.*

@RunWith(SpringRunner::class)
class AchievementServiceTests {

    @Mock
    private lateinit var achievementRepository: IAchievementRepository
    @InjectMocks
    private lateinit var achievementService: AchievementService

    @Test
    fun getAchievements() {
        /* Given */
        val achievementMock = Achievement(1L, "test")
        val achievementDtoExpected =
                AchievementDto.ModelMapper from achievementMock
        whenever(achievementRepository.findAll()).
                thenReturn(listOf(achievementMock))

        /* When */
        val result = achievementService.getAchievements()

        /* Then */
        assertEquals(achievementDtoExpected.id, result.first().id)
    }

    @Test
    fun addAchievement() {
        /* Given */
        val achievementMock = Achievement(1L, "test")
        val achievementDtoExpected =
                AchievementDto.ModelMapper from achievementMock
        whenever(achievementRepository.save(
                any<Achievement>())).thenReturn(achievementMock)

        /* When */
        val result = achievementService.addAchievement(
                AchievementInput.ModelMapper from achievementMock)

        /* Then */
        assertEquals(achievementDtoExpected, result)
    }

    @Test
    fun getAchievement() {
        /* Given */
        val achievementId = 1L
        val achievementMock = Achievement(1L, "test")
        whenever(achievementRepository.findById(achievementId)).thenReturn(Optional.of(achievementMock))
        /* When */
        val result = achievementService.getAchievement(achievementId)

        /* Then */
        assertEquals(achievementId, result.id)
    }

    @Test(expected = Error::class)
    fun getAchievementWhenAchievementIsNotFound() {
        /* Given */
        val achievementId = 2L
        whenever(achievementRepository.findById(achievementId)).thenReturn(Optional.empty())

        /* When */
        achievementService.getAchievement(achievementId)

        /* Then */
        fail("ErrorException was not thrown")
    }

    @Test
    fun unlockAchievement() {
        /* Given */
        val achievementId = 1L
        val achievementMock = Achievement(1L, "test")
        whenever(achievementRepository.findById(achievementId)).thenReturn(Optional.of(achievementMock))
        whenever(achievementRepository.save(
                any<Achievement>())).thenReturn(achievementMock)
        /* When */
        achievementService.unlockAchievement(achievementId)

        /* Then */
        assertEquals(true, achievementRepository.findById(achievementId).get().unlocked)
    }

    @Test(expected = Error::class)
    fun unlockAchievementWhenAchievementIsNotFound() {
        /* Given */
        val achievementId = 2L
        whenever(achievementRepository.findById(achievementId)).thenReturn(Optional.empty())

        /* When */
        achievementService.unlockAchievement(achievementId)

        /* Then */
        fail("ErrorException was not thrown")
    }

    @Test
    fun lockAllAchievements() {
        /* Given */
        val achievementMock = Achievement(1L, "test")
        whenever(achievementRepository.findAll()).
                thenReturn(listOf(achievementMock))

        /* When */
        val result = achievementService.lockAllAchievements()

        /* Then */
        assertEquals(true, result.none { it.unlocked })
    }

}