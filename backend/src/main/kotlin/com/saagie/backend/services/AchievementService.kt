package com.saagie.backend.services

import com.saagie.backend.models.Achievement
import com.saagie.backend.models.AchievementDto
import com.saagie.backend.models.AchievementInput
import com.saagie.backend.repositories.IAchievementRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class AchievementService {
    @Autowired
    private lateinit var achievementRepository: IAchievementRepository

    @Transactional(readOnly = true)
    fun getAchievements(): List<AchievementDto> {
        val achievements = achievementRepository.findAll()
        return achievements.map{ AchievementDto.ModelMapper from it}
    }

    @Transactional(readOnly = true)
    fun getAchievement(id: Long): AchievementDto {
        // Find achievement in repository and throw exception if it was not found.
        return achievementRepository.findById(id).
                map { AchievementDto.ModelMapper from it }.
                orElse(null)
                ?: throw Error("Achievement $id does not exist")
    }

    @Transactional
    fun addAchievement(achievementInput: AchievementInput): AchievementDto {
        val achievement = Achievement()
        achievement.goal = achievementInput.goal
        achievement.unlocked = achievementInput.unlocked
        return AchievementDto.ModelMapper.from(achievementRepository.save(achievement))
    }

    @Transactional
    fun unlockAchievement(id: Long) : AchievementDto {
        val achievement = achievementRepository.findById(id).orElse(null)
                ?: throw Error("Achievement $id does not exist")
        // Unlock achievement.
        achievement.unlocked = true
        // Save it.
        return AchievementDto.ModelMapper.from(achievementRepository.save(achievement))
    }

    @Transactional
    fun lockAllAchievements() : List<AchievementDto> {
        var achievements = achievementRepository.findAll()
        //Lock all achievements
        achievements.map{it.unlocked = false}
        // Save it.
        achievements = achievementRepository.saveAll(achievements)
        return achievements.map{ AchievementDto.ModelMapper from it}
    }


}