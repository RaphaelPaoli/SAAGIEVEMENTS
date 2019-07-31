package com.saagie.backend.models

data class AchievementInput(
                       var goal: String? = null,
                       var unlocked: Boolean = false){
    object ModelMapper {
        infix fun from(achievement: Achievement) =
                AchievementInput(achievement.goal, achievement.unlocked)
    }
}