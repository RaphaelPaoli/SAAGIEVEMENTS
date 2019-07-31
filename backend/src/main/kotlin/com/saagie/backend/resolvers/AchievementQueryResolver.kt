package com.saagie.backend.resolvers

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.saagie.backend.services.AchievementService
import org.springframework.stereotype.Component

@Component
class AchievementQueryResolver(
        private val achievementService: AchievementService)
    : GraphQLQueryResolver{

    fun allAchievements() =
            achievementService.getAchievements()
    fun getAchievement(id: Long) =
            achievementService.getAchievement(id)
}