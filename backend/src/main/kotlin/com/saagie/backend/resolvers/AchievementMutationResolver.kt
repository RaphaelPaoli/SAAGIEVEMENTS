package com.saagie.backend.resolvers

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.saagie.backend.models.AchievementInput
import com.saagie.backend.services.AchievementService
import org.springframework.stereotype.Component

@Component
class AchievementMutationResolver(
        private val achievementService: AchievementService)
    : GraphQLMutationResolver{

    fun addAchievement(achievementInput: AchievementInput) =
            achievementService.addAchievement(achievementInput)

    fun unlockAchievement(id: Long) =
            achievementService.unlockAchievement(id)
    fun lockAllAchievements() =
            achievementService.lockAllAchievements()
}